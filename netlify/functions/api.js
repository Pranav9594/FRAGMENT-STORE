const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

// In-memory storage
let statusChecks = [];

// Middleware
app.use(helmet());
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CSRF Protection
const csrfProtection = (req, res, next) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const token = req.headers['x-csrf-token'] || req.body._csrf;
    const cookieToken = req.cookies['csrf-token'];
    if (!token || !cookieToken || token !== cookieToken) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
  }
  next();
};

app.get('/.netlify/functions/api/csrf-token', (req, res) => {
  const token = uuidv4();
  res.cookie('csrf-token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  res.json({ csrfToken: token });
});

app.use('/.netlify/functions/api', csrfProtection);

app.get('/.netlify/functions/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/.netlify/functions/api/status', (req, res) => {
  const { client_name } = req.body;
  if (!client_name) return res.status(400).json({ error: 'client_name is required' });
  const statusCheck = { id: uuidv4(), client_name, timestamp: new Date() };
  statusChecks.push(statusCheck);
  res.status(201).json(statusCheck);
});

app.get('/.netlify/functions/api/status', (req, res) => {
  const sortedChecks = statusChecks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 1000);
  res.json(sortedChecks);
});

app.get('/.netlify/functions/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), database: 'in-memory', statusChecksCount: statusChecks.length });
});

module.exports.handler = serverless(app);

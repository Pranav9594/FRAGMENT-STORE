const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// In-memory storage
let statusChecks = [];

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CSRF Protection Middleware
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

// Generate CSRF token endpoint
app.get('/api/csrf-token', (req, res) => {
  const token = uuidv4();
  res.cookie('csrf-token', token, { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  res.json({ csrfToken: token });
});

app.use('/api', csrfProtection);

// Routes
app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Create status check
app.post('/api/status', (req, res) => {
  try {
    const { client_name } = req.body;
    
    if (!client_name) {
      return res.status(400).json({ error: 'client_name is required' });
    }

    const statusCheck = {
      id: uuidv4(),
      client_name,
      timestamp: new Date()
    };
    statusChecks.push(statusCheck);
    res.status(201).json(statusCheck);
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all status checks
app.get('/api/status', (req, res) => {
  try {
    const sortedChecks = statusChecks
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 1000);
    res.json(sortedChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: 'in-memory',
    statusChecksCount: statusChecks.length
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Database: In-memory storage (data will not persist after restart)`);
});
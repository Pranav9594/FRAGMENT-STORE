const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// In-memory storage (fallback when MongoDB is not available)
let statusChecks = [];
let useInMemory = false;

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection with fallback
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
      serverSelectionTimeoutMS: 5000 // 5 second timeout
    });
    console.log('MongoDB connected successfully');
    useInMemory = false;
  } catch (error) {
    console.warn('MongoDB connection failed, using in-memory storage:', error.message);
    console.log('To use MongoDB, please install and start MongoDB server');
    useInMemory = true;
  }
};

// Status Check Schema (for MongoDB)
const statusCheckSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4(),
    unique: true
  },
  client_name: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const StatusCheck = mongoose.model('StatusCheck', statusCheckSchema, 'status_checks');

// Routes
app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Create status check
app.post('/api/status', async (req, res) => {
  try {
    const { client_name } = req.body;
    
    if (!client_name) {
      return res.status(400).json({ error: 'client_name is required' });
    }

    if (useInMemory) {
      // In-memory storage
      const statusCheck = {
        id: uuidv4(),
        client_name,
        timestamp: new Date()
      };
      statusChecks.push(statusCheck);
      res.status(201).json(statusCheck);
    } else {
      // MongoDB storage
      const statusCheck = new StatusCheck({
        client_name
      });
      const savedStatusCheck = await statusCheck.save();
      res.status(201).json(savedStatusCheck);
    }
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all status checks
app.get('/api/status', async (req, res) => {
  try {
    if (useInMemory) {
      // In-memory storage
      const sortedChecks = statusChecks
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 1000);
      res.json(sortedChecks);
    } else {
      // MongoDB storage
      const checks = await StatusCheck.find().limit(1000).sort({ timestamp: -1 });
      res.json(checks);
    }
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
    database: useInMemory ? 'in-memory' : 'mongodb',
    statusChecksCount: useInMemory ? statusChecks.length : 'N/A'
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
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  if (!useInMemory) {
    await mongoose.connection.close();
  }
  process.exit(0);
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
  });
};

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
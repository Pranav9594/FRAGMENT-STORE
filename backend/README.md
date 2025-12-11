# Fragment Store Backend - Node.js/Express

A RESTful API backend built with Node.js, Express, and MongoDB.

## Features

- Express.js web framework
- MongoDB with Mongoose ODM
- CORS support
- Security middleware (Helmet)
- Request logging (Morgan)
- Environment-based configuration
- Graceful shutdown handling

## Prerequisites

- Node.js (v16 or higher)
- MongoDB running on localhost:27017
- npm or yarn

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
PORT=8000
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

- `GET /api/` - Root endpoint
- `POST /api/status` - Create a status check
- `GET /api/status` - Get all status checks
- `GET /health` - Health check endpoint

## API Usage

### Create Status Check
```bash
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "test-client"}'
```

### Get Status Checks
```bash
curl http://localhost:8000/api/status
```

## Testing

```bash
npm test
```
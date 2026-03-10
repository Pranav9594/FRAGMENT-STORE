# Fragment Store Backend - Node.js/Express

A RESTful API backend built with Node.js and Express.

## Features

- Express.js web framework
- In-memory data storage
- CORS support
- Security middleware (Helmet)
- Request logging (Morgan)
- Environment-based configuration
- Graceful shutdown handling

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```
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
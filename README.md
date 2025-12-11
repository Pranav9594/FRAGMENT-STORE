# Fragment Store

A modern e-commerce web application built with React and Node.js/Express, featuring a responsive UI with Tailwind CSS and Shadcn components.

## Features

- 🛍️ Modern e-commerce interface
- 🎨 Sleek UI with Tailwind CSS and Shadcn components
- 💳 Shopping cart functionality
- 🌐 RESTful API backend with Express.js
- 📦 MongoDB database integration (with in-memory fallback)
- 🎯 Responsive design for all devices

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Shadcn UI Components
- React Router DOM
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional - app works with in-memory storage)

## Quick Start

### Windows
```batch
# Install dependencies
install.bat

# Start the application
start.bat

# Stop the application
stop.bat
```

### Linux/Mac
```bash
# Make scripts executable
chmod +x install.sh start.sh

# Install dependencies
./install.sh

# Start the application
./start.sh
```

### Using npm scripts
```bash
# Install all dependencies (requires concurrently)
npm install
npm run install:all

# Start both servers
npm start

# Or start individually
npm run start:backend
npm run start:frontend
```

## Manual Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fragment-store.git
cd fragment-store
```

2. Set up the backend
```bash
cd backend
npm install
```

3. Set up the frontend
```bash
cd frontend
npm install
```

## Configuration

### Backend Environment Variables (`backend/.env`)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
PORT=8000
```

### Frontend Environment Variables (`frontend/.env`)
```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

## Running the Application

### Start Backend
```bash
cd backend
npm start        # Production
npm run dev      # Development with auto-reload
```

### Start Frontend
```bash
cd frontend
npm start
```

## URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Root endpoint |
| POST | `/api/status` | Create a status check |
| GET | `/api/status` | Get all status checks |
| GET | `/health` | Health check endpoint |

## Project Structure

```
fragment-store/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── server.js
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
├── install.bat          # Windows install script
├── install.sh           # Unix install script
├── package.json         # Root package.json
├── README.md
├── start.bat            # Windows start script
├── start.sh             # Unix start script
└── stop.bat             # Windows stop script
```

## Deployment

### Quick Deploy

**Vercel (Recommended):**
1. Fork this repository
2. Connect to [Vercel](https://vercel.com)
3. Set environment variables (see DEPLOYMENT.md)
4. Deploy automatically

**Railway:**
1. Connect to [Railway](https://railway.app)
2. Set environment variables
3. Deploy automatically

### Manual Deployment

```bash
# Build for production
./deploy.sh        # Linux/Mac
deploy.bat         # Windows

# Or using npm
npm run build
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Environment Variables

**Backend:**
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name
- `CORS_ORIGINS`: Allowed origins
- `PORT`: Server port (default: 8000)

**Frontend:**
- `REACT_APP_BACKEND_URL`: Backend API URL

## License

This project is licensed under the MIT License.
yoo
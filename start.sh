#!/bin/bash

# Fragment Store - Unix/Linux/Mac Startup Script
# This script starts both backend and frontend servers

echo "========================================"
echo "   Fragment Store - Starting App"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}[ERROR] Node.js is not installed or not in PATH${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}[INFO] Node.js found: $(node --version)${NC}"
echo ""

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Install backend dependencies if needed
echo "[INFO] Checking backend dependencies..."
if [ ! -d "backend/node_modules" ]; then
    echo -e "${YELLOW}[INFO] Installing backend dependencies...${NC}"
    cd backend
    npm install
    cd ..
else
    echo -e "${GREEN}[INFO] Backend dependencies already installed${NC}"
fi
echo ""

# Install frontend dependencies if needed
echo "[INFO] Checking frontend dependencies..."
if [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}[INFO] Installing frontend dependencies...${NC}"
    cd frontend
    npm install
    cd ..
else
    echo -e "${GREEN}[INFO] Frontend dependencies already installed${NC}"
fi
echo ""

echo "========================================"
echo "   Starting Servers"
echo "========================================"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}[INFO] Shutting down servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}[INFO] Servers stopped${NC}"
    exit 0
}

# Trap SIGINT (Ctrl+C) and SIGTERM
trap cleanup SIGINT SIGTERM

# Start backend server
echo -e "${GREEN}[INFO] Starting backend server on http://localhost:8000${NC}"
cd backend
npm start &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start frontend server
echo -e "${GREEN}[INFO] Starting frontend server on http://localhost:3000${NC}"
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

echo ""
echo "========================================"
echo "   Servers Started Successfully!"
echo "========================================"
echo ""
echo "Backend:  http://localhost:8000"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for both processes
wait
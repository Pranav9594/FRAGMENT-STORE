#!/bin/bash

# Fragment Store - Unix/Linux/Mac Installation Script
# This script installs all dependencies

echo "========================================"
echo "   Fragment Store - Installing"
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

echo -e "${GREEN}[INFO] Node.js version: $(node --version)${NC}"
echo -e "${GREEN}[INFO] npm version: $(npm --version)${NC}"
echo ""

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Install backend dependencies
echo "========================================"
echo "   Installing Backend Dependencies"
echo "========================================"
echo ""
cd backend
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}[ERROR] Failed to install backend dependencies${NC}"
    exit 1
fi
cd ..
echo ""
echo -e "${GREEN}[SUCCESS] Backend dependencies installed${NC}"
echo ""

# Install frontend dependencies
echo "========================================"
echo "   Installing Frontend Dependencies"
echo "========================================"
echo ""
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}[ERROR] Failed to install frontend dependencies${NC}"
    exit 1
fi
cd ..
echo ""
echo -e "${GREEN}[SUCCESS] Frontend dependencies installed${NC}"
echo ""

echo "========================================"
echo "   Installation Complete!"
echo "========================================"
echo ""
echo "You can now run ./start.sh to start the application"
echo ""
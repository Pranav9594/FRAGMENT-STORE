@echo off
REM Fragment Store - Windows Startup Script
REM This script starts both backend and frontend servers

echo ========================================
echo    Fragment Store - Starting App
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Node.js found: 
node --version
echo.

REM Install backend dependencies if needed
echo [INFO] Checking backend dependencies...
if not exist "backend\node_modules" (
    echo [INFO] Installing backend dependencies...
    cd backend
    call npm install
    cd ..
) else (
    echo [INFO] Backend dependencies already installed
)
echo.

REM Install frontend dependencies if needed
echo [INFO] Checking frontend dependencies...
if not exist "frontend\node_modules" (
    echo [INFO] Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
) else (
    echo [INFO] Frontend dependencies already installed
)
echo.

echo ========================================
echo    Starting Servers
echo ========================================
echo.

REM Start backend server in a new window
echo [INFO] Starting backend server on http://localhost:8000
start "Fragment Store - Backend" cmd /k "cd backend && npm start"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server in a new window
echo [INFO] Starting frontend server on http://localhost:3000
start "Fragment Store - Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo    Servers Started Successfully!
echo ========================================
echo.
echo Backend:  http://localhost:8000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
echo (The servers will continue running in their own windows)
pause >nul
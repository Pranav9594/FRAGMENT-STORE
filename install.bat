@echo off
REM Fragment Store - Windows Installation Script
REM This script installs all dependencies

echo ========================================
echo    Fragment Store - Installing
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

echo [INFO] Node.js version:
node --version
echo.
echo [INFO] npm version:
npm --version
echo.

REM Install backend dependencies
echo ========================================
echo    Installing Backend Dependencies
echo ========================================
echo.
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..
echo.
echo [SUCCESS] Backend dependencies installed
echo.

REM Install frontend dependencies
echo ========================================
echo    Installing Frontend Dependencies
echo ========================================
echo.
cd frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..
echo.
echo [SUCCESS] Frontend dependencies installed
echo.

echo ========================================
echo    Installation Complete!
echo ========================================
echo.
echo You can now run start.bat to start the application
echo.
pause
@echo off
echo 🚀 Fragment Store Deployment Script
echo ==================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm run install:all

REM Build frontend
echo 🏗️  Building frontend...
call npm run build:frontend

REM Check if build was successful
if not exist "frontend\build" (
    echo ❌ Error: Frontend build failed.
    exit /b 1
)

echo ✅ Build completed successfully!
echo.
echo 📋 Next steps:
echo 1. Set up your environment variables
echo 2. Deploy to your chosen platform:
echo    - Vercel: vercel --prod
echo    - Docker: docker build -t fragment-store .
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions

pause
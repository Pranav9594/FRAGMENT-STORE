#!/bin/bash

# Fragment Store Deployment Script

echo "🚀 Fragment Store Deployment Script"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install:all

# Build frontend
echo "🏗️  Building frontend..."
npm run build:frontend

# Check if build was successful
if [ ! -d "frontend/build" ]; then
    echo "❌ Error: Frontend build failed."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your environment variables"
echo "2. Deploy to your chosen platform:"
echo "   - Vercel: vercel --prod"
echo "   - Railway: railway up"
echo "   - Docker: docker build -t fragment-store ."
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
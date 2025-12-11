# Deployment Guide

This guide covers deploying Fragment Store to Vercel and Railway.

## Quick Deploy

### Vercel (Recommended for Frontend + Serverless Backend)

1. **Fork/Clone the repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Environment Variables:**
   ```
   NODE_ENV=production
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
   DB_NAME=fragment_store
   CORS_ORIGINS=https://your-frontend-domain.vercel.app
   ```

4. **Deploy:** Vercel will automatically build and deploy both frontend and backend

### Railway (Recommended for Full Backend)

1. **Connect to Railway:**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will detect the configuration

2. **Environment Variables:**
   ```
   NODE_ENV=production
   PORT=8000
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
   DB_NAME=fragment_store
   CORS_ORIGINS=*
   ```

3. **Deploy:** Railway will automatically build and deploy

## Manual Deployment Steps

### 1. Database Setup (MongoDB Atlas)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/`
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)

### 2. Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Backend Deployment (Railway/Heroku)

```bash
# For Railway
railway login
railway link
railway up

# For Heroku
heroku create your-app-name
git push heroku main
```

## Environment Variables Setup

### Backend (.env)
```env
NODE_ENV=production
PORT=8000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=fragment_store
CORS_ORIGINS=https://your-frontend-domain.vercel.app
```

### Frontend (.env.production)
```env
REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
GENERATE_SOURCEMAP=false
```

## Deployment Architecture Options

### Option 1: Vercel (Full Stack)
- Frontend: Vercel Static Hosting
- Backend: Vercel Serverless Functions
- Database: MongoDB Atlas

### Option 2: Railway + Vercel
- Frontend: Vercel Static Hosting  
- Backend: Railway Container
- Database: MongoDB Atlas

### Option 3: Railway (Full Stack)
- Frontend + Backend: Railway Container
- Database: MongoDB Atlas

## Post-Deployment Checklist

- [ ] Update CORS_ORIGINS with actual frontend URL
- [ ] Update REACT_APP_BACKEND_URL with actual backend URL
- [ ] Test all API endpoints
- [ ] Verify database connection
- [ ] Test frontend-backend communication
- [ ] Check health endpoint: `/health`

## Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Update CORS_ORIGINS environment variable
   - Ensure frontend URL matches CORS settings

2. **Database Connection:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings
   - Ensure database user has proper permissions

3. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Check build logs for specific errors

4. **Environment Variables:**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Restart deployment after changes

## Monitoring

- Health Check: `GET /health`
- API Status: `GET /api/`
- Frontend: Check console for errors

## Scaling Considerations

- Use MongoDB Atlas for production database
- Consider Redis for session storage
- Implement proper logging
- Add monitoring and alerts
- Use CDN for static assets
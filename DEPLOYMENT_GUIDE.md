# Deployment Guide

## ✅ Vercel Deployment

### Prerequisites
- Vercel account (https://vercel.com)
- Git repository

### Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```

3. **Or Deploy via GitHub**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Vercel will auto-detect configuration from `vercel.json`

### Environment Variables (Vercel Dashboard)
```
NODE_ENV=production
PORT=8000
CORS_ORIGINS=https://your-domain.vercel.app
```

### Build Settings
- **Build Command**: `npm run build:frontend`
- **Output Directory**: `frontend/build`
- **Install Command**: `npm install`

---

## ✅ Netlify Deployment

### Prerequisites
- Netlify account (https://netlify.com)
- Git repository

### Steps

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Install Netlify Functions Dependencies**
   ```bash
   cd netlify/functions
   npm install
   cd ../..
   ```

3. **Deploy via CLI**
   ```bash
   netlify deploy --prod
   ```

4. **Or Deploy via GitHub**
   - Push code to GitHub
   - Import project in Netlify dashboard
   - Netlify will auto-detect configuration from `netlify.toml`

### Environment Variables (Netlify Dashboard)
```
NODE_ENV=production
NODE_VERSION=18
```

### Build Settings
- **Base Directory**: `frontend`
- **Build Command**: `npm run build`
- **Publish Directory**: `frontend/build`
- **Functions Directory**: `netlify/functions`

---

## 🔧 Configuration Files

### Vercel
- `vercel.json` - Routes backend API and frontend
- Backend runs as serverless function
- Frontend served as static files

### Netlify
- `netlify.toml` - Build and redirect configuration
- `netlify/functions/api.js` - Serverless backend wrapper
- Frontend served as static files

---

## 🔒 Security Notes

1. **CSRF Protection**: Enabled on both platforms
2. **CORS**: Configure `CORS_ORIGINS` with your actual domain
3. **Environment Variables**: Set in platform dashboard, not in code
4. **HTTPS**: Automatically enabled on both platforms

---

## 🚀 API Endpoints

### Vercel
- Frontend: `https://your-app.vercel.app`
- API: `https://your-app.vercel.app/api/*`
- Health: `https://your-app.vercel.app/health`

### Netlify
- Frontend: `https://your-app.netlify.app`
- API: `https://your-app.netlify.app/.netlify/functions/api/*`
- Health: `https://your-app.netlify.app/.netlify/functions/api/health`

---

## 📝 Frontend API Configuration

Update frontend API calls based on platform:

### For Netlify
```javascript
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '/.netlify/functions/api' 
  : 'http://localhost:8000/api';
```

### For Vercel
```javascript
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:8000/api';
```

---

## 🧪 Testing Deployment

```bash
# Test health endpoint
curl https://your-app.vercel.app/health
curl https://your-app.netlify.app/.netlify/functions/api/health

# Test CSRF token
curl https://your-app.vercel.app/api/csrf-token
curl https://your-app.netlify.app/.netlify/functions/api/csrf-token
```

---

## 🐛 Troubleshooting

### Vercel
- Check build logs in Vercel dashboard
- Ensure `vercel.json` is in root directory
- Verify environment variables are set

### Netlify
- Check build logs in Netlify dashboard
- Ensure `netlify.toml` is in root directory
- Run `cd netlify/functions && npm install` before deploying
- Verify Node version is 18+

---

## 📊 Comparison

| Feature | Vercel | Netlify |
|---------|--------|---------|
| Setup | Easier | Requires function setup |
| API Path | `/api/*` | `/.netlify/functions/api/*` |
| Build Time | Faster | Moderate |
| Free Tier | 100GB bandwidth | 100GB bandwidth |
| Serverless | Native | Via functions |

---

## ✅ Deployment Checklist

- [ ] Push code to GitHub
- [ ] Install dependencies in `netlify/functions` (Netlify only)
- [ ] Set environment variables in platform dashboard
- [ ] Update CORS_ORIGINS with actual domain
- [ ] Test health endpoint after deployment
- [ ] Test CSRF token generation
- [ ] Verify frontend loads correctly
- [ ] Test API endpoints

---

**Both platforms are production-ready with full security features enabled!** 🚀

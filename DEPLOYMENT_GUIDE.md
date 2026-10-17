# Deployment Guide

## Vercel Deployment

### Prerequisites

- Vercel account (https://vercel.com)
- Git repository

### Deploy

Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

Deploy from the repository root:

```bash
vercel
```

Alternatively, import the GitHub repository in the Vercel dashboard. The repository contains a `vercel.json` configuration.

### Vercel Environment Variables

Configure these in the Vercel dashboard:

```text
NODE_ENV=production
PORT=8000
CORS_ORIGINS=https://your-domain.vercel.app
```

Do not add `cache-dir` or `NPM_CONFIG_CACHE_DIR`. If an npm cache override is required, use `NPM_CONFIG_CACHE`.

### Build Settings

- **Framework Preset**: Other
- **Root Directory**: repository root
- **Build Command**: `npm run build:frontend`
- **Output Directory**: `frontend/build`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x or newer

### Configuration

- `vercel.json` routes the backend API and frontend.
- `backend/server.js` runs as the Vercel serverless backend.
- The React frontend is built from `frontend/` and served from `frontend/build`.
- `/api/*` routes to the backend.
- `/health` routes to the backend health endpoint.

## Security Notes

1. CSRF protection is enabled on the backend.
2. Configure `CORS_ORIGINS` with the actual Vercel domain.
3. Store environment variables in the Vercel dashboard, not in source code.
4. HTTPS is provided by Vercel.

## API Endpoints

- Frontend: `https://your-app.vercel.app`
- API: `https://your-app.vercel.app/api/*`
- Health: `https://your-app.vercel.app/health`

## Frontend API Configuration

For production, use `/api`; for local development, use the local backend:

```javascript
const API_BASE = process.env.NODE_ENV === 'production'
  ? '/api'
  : 'http://localhost:8000/api';
```

## Testing Deployment

```bash
curl https://your-app.vercel.app/health
curl https://your-app.vercel.app/api/csrf-token
```

## Troubleshooting

- Check build logs in the Vercel dashboard.
- Ensure `vercel.json` is in the repository root.
- Verify Vercel environment variables.
- Redeploy without cache after changing npm or build settings.

## Deployment Checklist

- [ ] Push code to GitHub.
- [ ] Set environment variables in Vercel.
- [ ] Remove invalid `cache-dir` variables from Vercel.
- [ ] Test the health endpoint.
- [ ] Test CSRF token generation.
- [ ] Verify the frontend loads correctly.
- [ ] Test API endpoints.

# 🚀 TAO-STAR Portfolio Deployment Guide

This guide covers multiple deployment options for your portfolio, with step-by-step instructions for each platform.

## 🎯 Option 1: Vercel (Recommended)

### Why Vercel?
- ✅ **Free tier**: Perfect for portfolios
- ✅ **Automatic deployments**: Push to GitHub = instant deploy
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Environment variables**: Secure config management
- ✅ **Custom domains**: Professional URLs
- ✅ **Analytics**: Built-in performance monitoring

### Step-by-Step Vercel Deployment

#### 1. Prepare Your Repository
```bash
# Build the project locally to test
npm run build

# Test the production build
npm run preview
```

#### 2. Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: TAO-STAR Portfolio"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/tao-star-portfolio.git
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel
1. **Visit**: [vercel.com](https://vercel.com)
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Import** your GitHub repository
5. **Configure**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### 4. Environment Variables (Optional)
In Vercel dashboard → Settings → Environment Variables:
```
VITE_MAPBOX_ACCESS_TOKEN = your_mapbox_token
VITE_MAP_LONGITUDE = -74.006
VITE_MAP_LATITUDE = 40.7128
VITE_MAP_ZOOM = 10
```

#### 5. Custom Domain (Optional)
1. **Go to**: Project Settings → Domains
2. **Add domain**: yourdomain.com
3. **Configure DNS**: Point to Vercel's nameservers
4. **SSL**: Automatically provisioned

### Vercel CLI Deployment (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Option 2: Netlify

### Step-by-Step Netlify Deployment

#### 1. Build Configuration
The `netlify.toml` file is already configured in your project.

#### 2. Deploy via Git
1. **Visit**: [netlify.com](https://netlify.com)
2. **Sign up/Login** with GitHub
3. **Click "New site from Git"**
4. **Choose** your repository
5. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### 3. Environment Variables
In Netlify dashboard → Site Settings → Environment Variables:
```
VITE_MAPBOX_ACCESS_TOKEN = your_mapbox_token
VITE_MAP_LONGITUDE = -74.006
VITE_MAP_LATITUDE = 40.7128
VITE_MAP_ZOOM = 10
```

#### 4. Custom Domain
1. **Go to**: Site Settings → Domain Management
2. **Add custom domain**
3. **Configure DNS** records

### Netlify CLI Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## ☁️ Option 3: GitHub Pages

### Step-by-Step GitHub Pages Deployment

#### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### 2. Update package.json
Add to scripts section:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Configure Vite for GitHub Pages
Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

#### 4. Deploy
```bash
npm run deploy
```

#### 5. Enable GitHub Pages
1. **Go to**: Repository → Settings → Pages
2. **Source**: Deploy from a branch
3. **Branch**: gh-pages
4. **Folder**: / (root)

---

## 🐳 Option 4: Docker + Any Cloud Provider

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location /assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### Deploy Commands
```bash
# Build Docker image
docker build -t tao-star-portfolio .

# Run locally
docker run -p 3000:80 tao-star-portfolio

# Deploy to cloud (example: Google Cloud Run)
gcloud run deploy tao-star-portfolio --image tao-star-portfolio --platform managed
```

---

## 🔧 Pre-Deployment Optimization

### 1. Performance Optimization
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Optimize images (if needed)
npm install --save-dev imagemin imagemin-webp
```

### 2. SEO Optimization
Update `index.html`:
```html
<meta name="description" content="TAO-STAR - Full Stack Developer specializing in AI, Blockchain, and Modern Web Development">
<meta name="keywords" content="Full Stack Developer, React, Node.js, AI, Blockchain, Web Development">
<meta property="og:title" content="TAO-STAR Portfolio">
<meta property="og:description" content="7+ years of expertise in AI, Blockchain, Full Stack Development">
<meta property="og:image" content="/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### 3. Security Headers
Already configured in `vercel.json` and `netlify.toml`.

---

## 📊 Post-Deployment Checklist

### ✅ Testing
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Map displays properly
- [ ] Mobile responsiveness
- [ ] Performance (PageSpeed Insights)
- [ ] Cross-browser compatibility

### ✅ Analytics Setup
```html
<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### ✅ Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor Core Web Vitals

---

## 🎯 Recommended Deployment Strategy

### For Portfolio/Personal Use:
1. **Vercel** (Primary recommendation)
2. **Netlify** (Alternative)
3. **GitHub Pages** (Free option)

### For Client Projects:
1. **Vercel Pro** (Custom domains, analytics)
2. **AWS Amplify** (Enterprise features)
3. **Docker + Cloud Run** (Full control)

---

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Guide](https://pages.github.com)

---

## 🆘 Troubleshooting

### Common Issues:

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Environment Variables Not Working:**
- Ensure variables start with `VITE_`
- Check spelling and case sensitivity
- Restart development server after changes

**Routing Issues (404 on refresh):**
- Ensure SPA redirects are configured
- Check `vercel.json` or `netlify.toml` settings

**Map Not Loading:**
- Verify Mapbox token is set correctly
- Check browser console for errors
- Ensure token has correct permissions

Need help? Check the deployment platform's documentation or contact support.
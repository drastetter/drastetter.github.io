# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to **drastetter.github.io**.

## Prerequisites

1. GitHub account (username: `drastetter`)
2. Git installed on your computer
3. Repository created on GitHub

## Step-by-Step Deployment

### Option 1: Automatic Deployment (Recommended)

This method uses GitHub Actions to automatically build and deploy your site whenever you push changes.

#### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. **Important:** Name your repository exactly: `drastetter.github.io`
4. Make it public
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

#### 2. Push Your Code to GitHub

Open your terminal in the portfolio-website folder and run:

```bash
cd "c:\Users\donal\OneDrive\Desktop\Personal Library\Personal\GitHub\Website\portfolio-website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/drastetter/drastetter.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/drastetter/drastetter.github.io`
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically run and deploy your site

#### 4. Access Your Website

After the deployment completes (usually 2-5 minutes), your website will be live at:

**https://drastetter.github.io**

### Option 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# Install gh-pages package (one time)
npm install --save-dev gh-pages

# Add this script to package.json:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Making Updates

After your initial deployment, updating your site is easy:

```bash
# Make your changes to the code
# ...

# Commit and push
git add .
git commit -m "Update: describe your changes"
git push

# GitHub Actions will automatically rebuild and deploy!
```

## Troubleshooting

### Site not loading?

1. Check that your repository name is exactly `drastetter.github.io`
2. Make sure GitHub Pages is enabled in Settings → Pages
3. Check the Actions tab for any build errors
4. Wait a few minutes - GitHub Pages can take 5-10 minutes for the first deployment

### Build failing in GitHub Actions?

1. Go to the "Actions" tab in your repository
2. Click on the failed workflow
3. Check the error messages
4. Common fixes:
   - Make sure all dependencies are in package.json
   - Check that the build command works locally (`npm run build`)

### Wrong base path?

If you're deploying to a project page (not user page), update `vite.config.js`:

```javascript
base: '/your-repo-name/'  // Instead of '/'
```

## Custom Domain (Optional)

To use a custom domain like `donaldrastetter.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a file named `CNAME` in the `public` folder with your domain:
   ```
   donaldrastetter.com
   ```
3. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `drastetter.github.io`
4. In GitHub Settings → Pages, enter your custom domain

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Support

If you encounter issues:
1. Check the GitHub Actions logs for error messages
2. Verify your repository settings
3. Review the GitHub Pages documentation
4. Make sure your code builds locally with `npm run build`
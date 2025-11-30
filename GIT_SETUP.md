# 🚀 Git Setup Guide for SATAPARA CERAMIC WEBSITE

This guide will help you upload your website to GitHub.

## 📁 Project Structure

Your website is already organized in the `SATAPARA CERAMIC WEBSITE COSE` folder. Here's what's included:

```
SATAPARA CERAMIC WEBSITE COSE/
├── index.html              # Home page
├── products.html           # Products page
├── product-category.html   # Category page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── script.js           # Main JavaScript
│   └── category.js        # Category page JS
├── images/                 # All images (29+ images)
│   ├── home/              # Carousel images
│   ├── categories/        # Category banners
│   └── [product images]   # Product images
├── README.md              # Project documentation
├── LOGO_INSTRUCTIONS.md   # Logo setup guide
├── .gitignore            # Files to exclude from Git
└── .gitattributes        # Git file handling
```

## 🎯 Quick Upload to GitHub

### Method 1: Using GitHub Website (Easiest)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `satapara-ceramic-website` (or any name you prefer)
   - Make it **Public** (for GitHub Pages) or **Private**
   - Click "Create repository"

2. **Upload files**
   - On the new repository page, click "uploading an existing file"
   - Open the `SATAPARA CERAMIC WEBSITE COSE` folder
   - **Select ALL files and folders** (Ctrl+A or Cmd+A)
   - Drag and drop them into GitHub
   - Add commit message: "Initial commit - SATAPARA CERAMIC website"
   - Click "Commit changes"

3. **Done!** Your website is now on GitHub

### Method 2: Using Git Command Line

1. **Open Terminal/Command Prompt**
   - Navigate to the project folder:
   ```bash
   cd "/Users/kavyapatel/Desktop/Satapara Ceramic Website/SATAPARA CERAMIC WEBSITE COSE"
   ```

2. **Initialize Git**
   ```bash
   git init
   ```

3. **Add all files**
   ```bash
   git add .
   ```

4. **Commit**
   ```bash
   git commit -m "Initial commit - SATAPARA CERAMIC website"
   ```

5. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## 📝 Files Included

✅ **All essential files are included:**
- All HTML pages (5 pages)
- CSS stylesheet
- JavaScript files
- All images (29+ images)
- Documentation files

❌ **Excluded files (via .gitignore):**
- Python generation scripts (not needed)
- Test files
- Utility HTML files
- OS system files

## 🌐 Enable GitHub Pages (Free Hosting)

After uploading to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your website will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

**Example:** `https://username.github.io/satapara-ceramic-website`

## ✅ Pre-Upload Checklist

Before uploading, make sure:
- [x] All images are in the `images/` folder
- [x] All HTML files reference correct paths
- [x] Contact information is updated
- [x] Email address is correct everywhere
- [x] Address is correct in footer

## 🔄 Updating Your Website

After initial upload, to update files:

1. **Using GitHub Website:**
   - Edit files directly on GitHub, or
   - Upload new/changed files

2. **Using Git:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

## 📦 What Gets Uploaded

**Total files to upload:**
- 5 HTML pages
- 1 CSS file
- 2 JavaScript files
- 29+ image files
- Documentation files

**Total size:** Approximately 2-3 MB (mostly images)

## 🎉 You're Ready!

Your website folder is ready to upload. Just:
1. Open the `SATAPARA CERAMIC WEBSITE COSE` folder
2. Select all files (Ctrl+A / Cmd+A)
3. Upload to your GitHub repository

That's it! Your professional ceramic tiles website will be live! 🚀

---

**Need Help?** Check the main README.md for more details about the website structure and features.


@echo off
echo ================================================
echo GitHub Pages Deployment Setup
echo ================================================
echo.

echo Step 1: Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo Error: Git initialization failed. Make sure Git is installed.
    pause
    exit /b 1
)

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit - Portfolio website"

echo.
echo Step 4: Setting up remote repository...
git remote add origin https://github.com/drastetter/drastetter.github.io.git

echo.
echo Step 5: Renaming branch to main...
git branch -M main

echo.
echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo Next steps:
echo 1. Make sure you've created a repository named "drastetter.github.io" on GitHub
echo 2. Run this command to push your code:
echo.
echo    git push -u origin main
echo.
echo 3. Then enable GitHub Pages in your repository settings
echo    (Settings → Pages → Source: GitHub Actions)
echo.
echo Your site will be live at: https://drastetter.github.io
echo.
pause
#!/bin/bash

# TAO-STAR Portfolio Deployment Script
echo "🚀 Starting TAO-STAR Portfolio Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Run linting
print_status "Running linter..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting issues found, but continuing..."
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Test the build
print_status "Testing the build..."
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    print_success "Build output verified"
else
    print_error "Build output not found"
    exit 1
fi

# Check build size
BUILD_SIZE=$(du -sh dist | cut -f1)
print_status "Build size: $BUILD_SIZE"

# Deployment options
echo ""
echo "🎯 Choose your deployment option:"
echo "1) Vercel (Recommended)"
echo "2) Netlify"
echo "3) GitHub Pages"
echo "4) Manual deployment (just build)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            print_warning "Vercel CLI not installed. Installing..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
    2)
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod
        else
            print_warning "Netlify CLI not installed. Installing..."
            npm install -g netlify-cli
            netlify deploy --prod
        fi
        ;;
    3)
        print_status "Deploying to GitHub Pages..."
        if npm list gh-pages &> /dev/null; then
            npm run deploy
        else
            print_warning "gh-pages not installed. Installing..."
            npm install --save-dev gh-pages
            # Add deploy script to package.json if not exists
            npm run deploy
        fi
        ;;
    4)
        print_success "Build completed. Files are ready in the 'dist' directory."
        print_status "You can now manually upload the 'dist' folder to your hosting provider."
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

print_success "🎉 Deployment process completed!"
echo ""
echo "📋 Next steps:"
echo "• Test your deployed site"
echo "• Set up custom domain (if needed)"
echo "• Configure environment variables"
echo "• Set up monitoring and analytics"
echo ""
echo "🔗 Useful links:"
echo "• Vercel Dashboard: https://vercel.com/dashboard"
echo "• Netlify Dashboard: https://app.netlify.com"
echo "• GitHub Pages: https://pages.github.com"
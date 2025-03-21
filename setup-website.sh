#!/bin/bash

# React Website Project Setup Script
# Creates a structure for a React-based website

echo "Setting up React website project structure..."

# Create main directories
mkdir -p src/components/common src/components/pages src/assets/images src/assets/fonts src/styles src/hooks src/utils public

# Create common components
touch src/components/common/Header.jsx
touch src/components/common/Footer.jsx
touch src/components/common/Navigation.jsx

# Create page components
touch src/components/pages/Home.jsx
touch src/components/pages/About.jsx
touch src/components/pages/Projects.jsx
touch src/components/pages/Contact.jsx
touch src/components/pages/Resume.jsx

# Create core React files
touch src/App.jsx
touch src/index.jsx
touch src/routes.jsx

# Create style files
touch src/styles/global.css
touch src/styles/variables.css

# Create utility files
touch src/hooks/useWindowSize.jsx
touch src/utils/helpers.js

# Create public files
touch public/index.html
touch public/robots.txt
touch public/favicon.ico

# Create config files
touch package.json
touch vite.config.js
touch .gitignore
touch README.md

echo "React website project structure created successfully!"
echo "Created components, pages, styles, and configuration files for your React project"
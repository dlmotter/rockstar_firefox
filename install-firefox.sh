#!/bin/bash
# Firefox Installation Script for rockstar extension

echo "=== Rockstar Firefox Extension Installation ==="
echo
echo "This script will help you install the Firefox-compatible version of the rockstar extension."
echo
echo "Installation Methods:"
echo "1. Temporary Installation (for development/testing)"
echo "2. Signed Extension (for permanent installation)"
echo
echo "=== Method 1: Temporary Installation ==="
echo "1. Open Firefox"
echo "2. Go to: about:debugging"
echo "3. Click 'This Firefox'"
echo "4. Click 'Load Temporary Add-on'"
echo "5. Navigate to this folder and select 'manifest.json'"
echo
echo "=== Method 2: Signed Extension ==="
echo "To create a signed extension for permanent installation:"
echo "1. Install web-ext: npm install -g web-ext"
echo "2. Sign the extension: web-ext sign --api-key=YOUR_KEY --api-secret=YOUR_SECRET"
echo "3. Install the generated .xpi file in Firefox"
echo
echo "For more information, visit:"
echo "- Firefox Extension Development: https://extensionworkshop.com/"
echo "- web-ext documentation: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
echo
echo "The extension is now ready for Firefox installation!"

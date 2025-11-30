#!/bin/bash
# Script to push code to GitHub
# Run this script and enter your GitHub credentials when prompted

echo "🚀 Pushing SATAPARA CERAMIC website to GitHub..."
echo ""
echo "Repository: https://github.com/DHRUVPATEL010/Satapra-Ceramics"
echo "Branch: Dev"
echo ""
echo "You will be prompted for:"
echo "  - Username: DHRUVPATEL010"
echo "  - Password: Use a Personal Access Token (not your GitHub password)"
echo ""
echo "To create a token: https://github.com/settings/tokens"
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

git push -u origin Dev

echo ""
echo "✅ Push complete! Check your repository:"
echo "https://github.com/DHRUVPATEL010/Satapra-Ceramics/tree/Dev"


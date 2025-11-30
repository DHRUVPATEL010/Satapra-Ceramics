#!/usr/bin/env python3
"""
Update all file paths in HTML files to point to root directory
"""
import os
import re

def update_paths_in_file(filepath):
    """Update paths in a single file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Update CSS path
    content = re.sub(r'href=["\']css/styles\.css["\']', 'href="styles.css"', content)
    
    # Update JS paths
    content = re.sub(r'src=["\']js/script\.js["\']', 'src="script.js"', content)
    content = re.sub(r'src=["\']js/category\.js["\']', 'src="category.js"', content)
    
    # Update image paths - remove images/ prefix
    content = re.sub(r'src=["\']images/([^"\']+)["\']', r'src="\1"', content)
    content = re.sub(r'url\(["\']?images/([^"\']+)["\']?\)', r'url("\1")', content)
    content = re.sub(r'background-image:\s*url\(["\']?images/([^"\']+)["\']?\)', r'background-image: url("\1")', content)
    
    # Update category banner paths
    content = re.sub(r'images/categories/([^/]+)/category-banner\.jpg', r'\1-category-banner.jpg', content)
    
    # Update carousel paths
    content = re.sub(r'images/home/carousel-([^"\']+)', r'carousel-\1', content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Update all HTML files
html_files = ['index.html', 'products.html', 'about.html', 'contact.html', 'product-category.html']

for html_file in html_files:
    if os.path.exists(html_file):
        if update_paths_in_file(html_file):
            print(f"✓ Updated paths in {html_file}")
        else:
            print(f"  No changes needed in {html_file}")

# Update category.js
if os.path.exists("category.js"):
    with open("category.js", 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    # Update image paths in category.js
    content = re.sub(r'images/([^"\']+)', r'\1', content)
    
    if content != original:
        with open("category.js", 'w', encoding='utf-8') as f:
            f.write(content)
        print("✓ Updated paths in category.js")

print("\n✅ All paths updated!")


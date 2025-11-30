#!/usr/bin/env python3
"""
Flatten the project structure - move all files to root directory
"""
import os
import shutil
import re

def flatten_structure():
    base_dir = "."
    
    # Files to move
    files_to_move = []
    
    # Move CSS file
    if os.path.exists("css/styles.css"):
        shutil.move("css/styles.css", "styles.css")
        print("✓ Moved css/styles.css → styles.css")
        if os.path.exists("css") and not os.listdir("css"):
            os.rmdir("css")
    
    # Move JS files
    if os.path.exists("js/script.js"):
        shutil.move("js/script.js", "script.js")
        print("✓ Moved js/script.js → script.js")
    
    if os.path.exists("js/category.js"):
        shutil.move("js/category.js", "category.js")
        print("✓ Moved js/category.js → category.js")
    
    if os.path.exists("js") and not os.listdir("js"):
        os.rmdir("js")
    
    # Move all images to root
    if os.path.exists("images"):
        for root, dirs, files in os.walk("images"):
            for file in files:
                src = os.path.join(root, file)
                # Create unique name if file exists
                dst = file
                counter = 1
                while os.path.exists(dst) and src != dst:
                    name, ext = os.path.splitext(file)
                    dst = f"{name}_{counter}{ext}"
                    counter += 1
                
                if src != dst:
                    shutil.move(src, dst)
                    print(f"✓ Moved {src} → {dst}")
        
        # Remove empty image directories
        for root, dirs, files in os.walk("images", topdown=False):
            for dir_name in dirs:
                dir_path = os.path.join(root, dir_name)
                try:
                    if not os.listdir(dir_path):
                        os.rmdir(dir_path)
                except:
                    pass
        try:
            if os.path.exists("images") and not os.listdir("images"):
                os.rmdir("images")
        except:
            pass
    
    print("\n✅ All files moved to root directory!")

if __name__ == "__main__":
    flatten_structure()


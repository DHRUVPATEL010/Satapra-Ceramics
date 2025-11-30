#!/usr/bin/env python3
"""
Generate all placeholder images for SATAPARA CERAMIC TRADE website
"""
import os
from PIL import Image, ImageDraw, ImageFont
import textwrap

# Color scheme matching the website
COLORS = {
    'primary': '#e74c3c',
    'secondary': '#2c3e50',
    'accent': '#3498db',
    'success': '#27ae60',
    'warning': '#f39c12',
    'info': '#9b59b6',
    'dark': '#34495e',
    'light': '#ecf0f1'
}

def create_image(text, width=800, height=600, bg_color='#2c3e50', text_color='#ffffff', category_color=None):
    """Create a placeholder image with text"""
    # Create image
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default if not available
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
    except:
        try:
            font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
            font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
        except:
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()
    
    # Add gradient effect (simple diagonal)
    if category_color:
        for i in range(width):
            alpha = i / width
            r1, g1, b1 = tuple(int(bg_color[j:j+2], 16) for j in (1, 3, 5))
            r2, g2, b2 = tuple(int(category_color[j:j+2], 16) for j in (1, 3, 5))
            r = int(r1 + (r2 - r1) * alpha)
            g = int(g1 + (g2 - g1) * alpha)
            b = int(b1 + (b2 - b1) * alpha)
            for j in range(height):
                draw.rectangle([(i, j), (i+1, j+1)], fill=(r, g, b))
    
    # Add decorative circle
    center_x, center_y = width // 2, height // 2
    circle_radius = min(width, height) // 3
    draw.ellipse(
        [(center_x - circle_radius, center_y - circle_radius),
         (center_x + circle_radius, center_y + circle_radius)],
        outline=text_color, width=5
    )
    
    # Add text
    text_lines = textwrap.wrap(text, width=20)
    y_offset = center_y - (len(text_lines) * 40) // 2
    
    for line in text_lines:
        bbox = draw.textbbox((0, 0), line, font=font_large)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (width - text_width) // 2
        draw.text((x, y_offset), line, fill=text_color, font=font_large)
        y_offset += text_height + 10
    
    # Add subtitle
    subtitle = "SATAPARA CERAMIC TRADE"
    bbox = draw.textbbox((0, 0), subtitle, font=font_small)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    draw.text((x, height - 80), subtitle, fill=(200, 200, 200), font=font_small)
    
    return img

def ensure_directory(path):
    """Ensure directory exists"""
    os.makedirs(path, exist_ok=True)

# Create directories
base_dir = "images"
ensure_directory(f"{base_dir}/home")
ensure_directory(f"{base_dir}/categories/wall-tiles")
ensure_directory(f"{base_dir}/categories/floor-tiles")
ensure_directory(f"{base_dir}/categories/bathroom-tiles")
ensure_directory(f"{base_dir}/categories/kitchen-tiles")
ensure_directory(f"{base_dir}/categories/parking-tiles")
ensure_directory(f"{base_dir}/categories/sanitary-ware")
ensure_directory(f"{base_dir}/categories/vitrified-tiles")
ensure_directory(f"{base_dir}/categories/ceramic-tiles")
ensure_directory(f"{base_dir}/categories/porcelain-tiles")
ensure_directory(f"{base_dir}/categories/marble-tiles")

print("Generating images...")

# Carousel images for home page
carousel_images = [
    ("carousel-wall-tiles.jpg", "WALL TILES", COLORS['primary']),
    ("carousel-floor-tiles.jpg", "FLOOR TILES", COLORS['accent']),
    ("carousel-bathroom-tiles.jpg", "BATHROOM TILES", COLORS['info']),
    ("carousel-kitchen-tiles.jpg", "KITCHEN TILES", COLORS['warning']),
    ("carousel-parking-tiles.jpg", "PARKING TILES", COLORS['dark']),
    ("carousel-sanitary-ware.jpg", "SANITARY WARE", COLORS['success'])
]

for filename, text, color in carousel_images:
    img = create_image(text, width=1920, height=800, category_color=color)
    img.save(f"{base_dir}/home/{filename}", "JPEG", quality=85)
    print(f"✓ Created {base_dir}/home/{filename}")

# Category banner images
category_banners = [
    ("wall-tiles", "WALL TILES", COLORS['primary']),
    ("floor-tiles", "FLOOR TILES", COLORS['accent']),
    ("bathroom-tiles", "BATHROOM TILES", COLORS['info']),
    ("kitchen-tiles", "KITCHEN TILES", COLORS['warning']),
    ("parking-tiles", "PARKING TILES", COLORS['dark']),
    ("sanitary-ware", "SANITARY WARE", COLORS['success']),
    ("vitrified-tiles", "VITRIFIED TILES", COLORS['warning']),
    ("ceramic-tiles", "CERAMIC TILES", COLORS['secondary']),
    ("porcelain-tiles", "PORCELAIN TILES", COLORS['info']),
    ("marble-tiles", "MARBLE TILES", COLORS['light'])
]

for category, text, color in category_banners:
    img = create_image(text, width=1200, height=400, category_color=color)
    img.save(f"{base_dir}/categories/{category}/category-banner.jpg", "JPEG", quality=85)
    print(f"✓ Created {base_dir}/categories/{category}/category-banner.jpg")

# Products page images (in root images folder)
products_images = [
    ("wall-tiles.jpg", "WALL TILES", COLORS['primary']),
    ("floor-tiles.jpg", "FLOOR TILES", COLORS['accent']),
    ("bathroom-tiles.jpg", "BATHROOM TILES", COLORS['info']),
    ("kitchen-tiles.jpg", "KITCHEN TILES", COLORS['warning']),
    ("parking-tiles.jpg", "PARKING TILES", COLORS['dark']),
    ("sanitary-ware.jpg", "SANITARY WARE", COLORS['success']),
    ("vitrified-tiles.jpg", "VITRIFIED TILES", COLORS['warning']),
    ("ceramic-tiles.jpg", "CERAMIC TILES", COLORS['secondary']),
    ("porcelain-tiles.jpg", "PORCELAIN TILES", COLORS['info']),
    ("marble-tiles.jpg", "MARBLE TILES", COLORS['light'])
]

for filename, text, color in products_images:
    img = create_image(text, width=600, height=400, category_color=color)
    img.save(f"{base_dir}/{filename}", "JPEG", quality=85)
    print(f"✓ Created {base_dir}/{filename}")

# About page images
about_images = [
    ("warehouse.jpg", "OUR WAREHOUSE", COLORS['success']),
    ("showroom.jpg", "OUR SHOWROOM", COLORS['primary']),
    ("team.jpg", "OUR TEAM", COLORS['accent'])
]

for filename, text, color in about_images:
    img = create_image(text, width=600, height=400, category_color=color)
    img.save(f"{base_dir}/{filename}", "JPEG", quality=85)
    print(f"✓ Created {base_dir}/{filename}")

print("\n✅ All images generated successfully!")
print(f"Total images created: {len(carousel_images) + len(category_banners) + len(products_images) + len(about_images)}")


#!/usr/bin/env python3
"""
Generate all individual product images for category pages
Creates realistic tile images for each product variant
"""
import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def create_tile_pattern(width, height, tile_size, tile_color, grout_color, pattern_type='grid', effect=None):
    """Create a realistic tile pattern with grout lines"""
    grout_width = 3
    img = Image.new('RGB', (width, height), grout_color)
    draw = ImageDraw.Draw(img)
    
    # Draw tiles with proper grout spacing
    for y in range(grout_width, height - tile_size, tile_size + grout_width * 2):
        for x in range(grout_width, width - tile_size, tile_size + grout_width * 2):
            # Add slight color variation for realism
            variation = random.randint(-20, 20)
            r, g, b = tile_color
            tile_r = max(0, min(255, r + variation))
            tile_g = max(0, min(255, g + variation))
            tile_b = max(0, min(255, b + variation))
            
            # Draw main tile
            draw.rectangle(
                [(x, y), (x + tile_size, y + tile_size)],
                fill=(tile_r, tile_g, tile_b),
                outline=None
            )
            
            # Add effects based on pattern type
            if pattern_type == 'glossy':
                # Add glossy highlight
                for i in range(tile_size):
                    alpha = int(40 * (1 - abs(i - tile_size/2) / (tile_size/2)))
                    if alpha > 0:
                        highlight_y = y + i
                        if highlight_y < y + tile_size:
                            draw.line(
                                [(x, highlight_y), (x + tile_size, highlight_y)],
                                fill=(min(255, tile_r+alpha), min(255, tile_g+alpha), min(255, tile_b+alpha)),
                                width=1
                            )
            elif pattern_type == 'matte':
                # Add subtle texture
                for _ in range(5):
                    noise_x = x + random.randint(5, tile_size - 5)
                    noise_y = y + random.randint(5, tile_size - 5)
                    size = random.randint(2, 4)
                    draw.ellipse(
                        [(noise_x-size, noise_y-size), (noise_x+size, noise_y+size)],
                        fill=(max(0, tile_r-15), max(0, tile_g-15), max(0, tile_b-15))
                    )
    
    # Apply special effects
    if effect == 'marble':
        img = add_marble_effect(img, tile_color)
    elif effect == 'wood':
        img = add_wood_effect(img, tile_color)
    elif effect == 'mosaic':
        img = add_mosaic_effect(img, tile_color)
    elif effect == 'pattern':
        img = add_pattern_effect(img, tile_color)
    
    return img

def add_marble_effect(img, base_color):
    """Add marble-like veining effect"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    for _ in range(10):
        start_x = random.randint(0, width)
        start_y = random.randint(0, height)
        
        points = []
        for i in range(25):
            x = start_x + i * (width // 25) + random.randint(-40, 40)
            y = start_y + random.randint(-60, 60) * math.sin(i * 0.3)
            points.append((x, y))
        
        for i in range(len(points) - 1):
            r, g, b = base_color
            vein_color = (max(0, r-50), max(0, g-50), max(0, b-50))
            draw.line([points[i], points[i+1]], fill=vein_color, width=4)
    
    return img

def add_wood_effect(img, base_color):
    """Add wood grain effect"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    for y in range(0, height, 4):
        variation = random.randint(-25, 25)
        r, g, b = base_color
        line_color = (max(0, r+variation), max(0, g+variation), max(0, b+variation))
        
        points = []
        for x in range(0, width, 8):
            y_offset = random.randint(-4, 4)
            points.append((x, y + y_offset))
        
        if len(points) > 1:
            for i in range(len(points) - 1):
                draw.line([points[i], points[i+1]], fill=line_color, width=2)
    
    return img

def add_mosaic_effect(img, base_color):
    """Add mosaic tile effect (smaller tiles)"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    small_tile = 20
    grout = 2
    
    for y in range(0, height, small_tile + grout):
        for x in range(0, width, small_tile + grout):
            variation = random.randint(-30, 30)
            r, g, b = base_color
            tile_r = max(0, min(255, r + variation))
            tile_g = max(0, min(255, g + variation))
            tile_b = max(0, min(255, b + variation))
            
            draw.rectangle(
                [(x, y), (x + small_tile, y + small_tile)],
                fill=(tile_r, tile_g, tile_b)
            )
    
    return img

def add_pattern_effect(img, base_color):
    """Add decorative pattern"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    # Add geometric pattern
    pattern_size = 40
    for y in range(0, height, pattern_size):
        for x in range(0, width, pattern_size):
            if (x // pattern_size + y // pattern_size) % 2 == 0:
                r, g, b = base_color
                pattern_color = (max(0, r-20), max(0, g-20), max(0, b-20))
                draw.ellipse(
                    [(x+5, y+5), (x+pattern_size-5, y+pattern_size-5)],
                    outline=pattern_color,
                    width=2
                )
    
    return img

# Product image configurations
product_configs = {
    # Wall Tiles
    'wall-tiles-1': ((250, 250, 255), 'glossy', None, 50),  # Classic White
    'wall-tiles-2': ((240, 235, 230), 'glossy', 'marble', 60),  # Marble Effect
    'wall-tiles-3': ((245, 245, 250), 'glossy', None, 45),  # Subway
    'wall-tiles-4': ((220, 240, 250), 'glossy', 'mosaic', 20),  # Mosaic
    'wall-tiles-5': ((235, 235, 240), 'matte', None, 55),  # Textured
    'wall-tiles-6': ((255, 255, 255), 'glossy', None, 60),  # Glossy
    
    # Floor Tiles
    'floor-tiles-1': ((180, 150, 120), 'glossy', 'wood', 70),  # Wood Effect
    'floor-tiles-2': ((160, 150, 140), 'matte', None, 80),  # Stone Effect
    'floor-tiles-3': ((200, 190, 180), 'glossy', None, 75),  # Polished
    'floor-tiles-4': ((150, 145, 140), 'matte', None, 60),  # Anti-Slip
    'floor-tiles-5': ((190, 180, 170), 'glossy', None, 90),  # Large Format
    'floor-tiles-6': ((170, 160, 150), 'glossy', 'pattern', 70),  # Patterned
    
    # Bathroom Tiles
    'bathroom-tiles-1': ((220, 240, 250), 'glossy', None, 50),  # Waterproof
    'bathroom-tiles-2': ((200, 220, 240), 'glossy', 'mosaic', 15),  # Glass Mosaic
    'bathroom-tiles-3': ((230, 240, 250), 'glossy', None, 55),  # Ceramic
    'bathroom-tiles-4': ((180, 170, 160), 'matte', None, 50),  # Natural Stone
    'bathroom-tiles-5': ((240, 245, 250), 'glossy', None, 40),  # Metro
    'bathroom-tiles-6': ((250, 250, 255), 'glossy', 'marble', 60),  # Luxury
    
    # Kitchen Tiles
    'kitchen-tiles-1': ((250, 245, 240), 'glossy', None, 55),  # Heat Resistant
    'kitchen-tiles-2': ((245, 240, 235), 'glossy', 'mosaic', 20),  # Backsplash
    'kitchen-tiles-3': ((255, 250, 245), 'glossy', None, 50),  # Stain Resistant
    'kitchen-tiles-4': ((250, 250, 255), 'glossy', None, 40),  # Subway
    'kitchen-tiles-5': ((255, 255, 255), 'glossy', None, 60),  # Glossy
    'kitchen-tiles-6': ((240, 235, 230), 'glossy', 'pattern', 50),  # Pattern
    
    # Parking Tiles
    'parking-tiles-1': ((100, 100, 100), 'matte', None, 100),  # Heavy Duty
    'parking-tiles-2': ((110, 110, 110), 'matte', None, 90),  # Anti-Slip
    'parking-tiles-3': ((95, 95, 95), 'matte', None, 95),  # Drainage
    'parking-tiles-4': ((120, 120, 120), 'matte', None, 100),  # Concrete
    'parking-tiles-5': ((105, 105, 105), 'matte', 'pattern', 95),  # Patterned
    'parking-tiles-6': ((130, 120, 110), 'matte', None, 90),  # Colored
    
    # Sanitary Ware (different style - product images)
    'sanitary-1': ((255, 255, 255), 'glossy', None, 80),  # Wash Basins
    'sanitary-2': ((250, 250, 255), 'glossy', None, 80),  # Toilets
    'sanitary-3': ((255, 255, 255), 'glossy', None, 75),  # Wall Hung
    'sanitary-4': ((245, 245, 250), 'glossy', None, 70),  # Accessories
    'sanitary-5': ((250, 250, 255), 'glossy', None, 75),  # Mirrors
    'sanitary-6': ((255, 255, 255), 'glossy', None, 80),  # Shower
    
    # Vitrified Tiles
    'vitrified-1': ((200, 190, 180), 'glossy', 'marble', 75),  # Double Charge
    'vitrified-2': ((210, 200, 190), 'glossy', None, 80),  # Glazed
    'vitrified-3': ((195, 185, 175), 'glossy', None, 75),  # Polished
    'vitrified-4': ((205, 195, 185), 'glossy', 'pattern', 80),  # Digital
    'vitrified-5': ((190, 180, 170), 'glossy', None, 90),  # Large Format
    'vitrified-6': ((200, 190, 180), 'matte', None, 75),  # Anti-Slip
    
    # Ceramic Tiles
    'ceramic-1': ((220, 220, 225), 'glossy', None, 55),  # Glazed
    'ceramic-2': ((210, 210, 215), 'matte', None, 60),  # Unglazed
    'ceramic-3': ((225, 225, 230), 'matte', None, 55),  # Textured
    'ceramic-4': ((215, 220, 225), 'glossy', 'pattern', 55),  # Pattern
    'ceramic-5': ((230, 230, 235), 'glossy', None, 60),  # Solid Color
    'ceramic-6': ((225, 230, 235), 'glossy', 'pattern', 55),  # Decorative
    
    # Porcelain Tiles
    'porcelain-1': ((210, 200, 190), 'glossy', None, 80),  # Full Body
    'porcelain-2': ((205, 195, 185), 'glossy', None, 85),  # Glazed
    'porcelain-3': ((200, 190, 180), 'matte', None, 80),  # Outdoor
    'porcelain-4': ((195, 185, 175), 'glossy', None, 90),  # Large Format
    'porcelain-5': ((210, 200, 190), 'glossy', None, 75),  # Thin
    'porcelain-6': ((205, 195, 185), 'matte', None, 80),  # Textured
    
    # Marble Tiles
    'marble-1': ((250, 245, 240), 'glossy', 'marble', 70),  # White
    'marble-2': ((60, 60, 65), 'glossy', 'marble', 70),  # Black
    'marble-3': ((245, 240, 235), 'glossy', 'marble', 70),  # Carrara
    'marble-4': ((250, 248, 245), 'glossy', 'marble', 70),  # Calacatta
    'marble-5': ((248, 243, 238), 'glossy', 'marble', 70),  # Polished
    'marble-6': ((240, 235, 230), 'matte', 'marble', 70),  # Honed
}

def generate_product_image(product_key, width=600, height=400):
    """Generate a product image"""
    if product_key not in product_configs:
        # Default fallback
        tile_color = (220, 220, 225)
        pattern = 'glossy'
        effect = None
        tile_size = 60
    else:
        tile_color, pattern, effect, tile_size = product_configs[product_key]
    
    grout_color = tuple(max(0, c - 30) for c in tile_color)
    
    img = create_tile_pattern(width, height, tile_size, tile_color, grout_color, pattern, effect)
    
    # Enhance image
    img = img.filter(ImageFilter.SMOOTH_MORE)
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.1)
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(1.05)
    
    return img

# Generate all product images
print("Generating individual product images...")
print("=" * 60)

base_dir = "images"
os.makedirs(base_dir, exist_ok=True)

# Generate all product images
count = 0
for product_key in product_configs.keys():
    img = generate_product_image(product_key, width=600, height=400)
    filename = f"{product_key}.jpg"
    img.save(f"{base_dir}/{filename}", "JPEG", quality=90, optimize=True)
    count += 1
    if count % 6 == 0:
        print(f"✓ Generated {count} images...")

print("=" * 60)
print(f"✅ All {count} product images generated successfully!")
print(f"Images saved in: {base_dir}/")


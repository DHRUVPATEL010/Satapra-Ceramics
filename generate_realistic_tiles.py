#!/usr/bin/env python3
"""
Generate realistic tile images with patterns, textures, and grout lines
Similar to Kajaria and Cera tile websites
"""
import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def create_tile_pattern(width, height, tile_size, tile_color, grout_color, pattern_type='grid'):
    """Create a realistic tile pattern with grout lines"""
    grout_width = 3
    img = Image.new('RGB', (width, height), grout_color)
    draw = ImageDraw.Draw(img)
    
    # Draw tiles with proper grout spacing
    for y in range(grout_width, height - tile_size, tile_size + grout_width * 2):
        for x in range(grout_width, width - tile_size, tile_size + grout_width * 2):
            # Add slight color variation for realism (like real tiles)
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
            
            # Add realistic texture/shine effect
            if pattern_type == 'glossy':
                # Add glossy highlight (top-left to bottom-right gradient)
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
                
                # Add reflection highlight
                highlight_size = tile_size // 3
                for i in range(highlight_size):
                    alpha = int(60 * (1 - i / highlight_size))
                    if alpha > 0:
                        highlight_x = x + i
                        highlight_y = y + i
                        if highlight_x < x + tile_size and highlight_y < y + tile_size:
                            draw.ellipse(
                                [(highlight_x-5, highlight_y-5), (highlight_x+5, highlight_y+5)],
                                fill=(min(255, tile_r+alpha), min(255, tile_g+alpha), min(255, tile_b+alpha))
                            )
                            
            elif pattern_type == 'matte':
                # Add subtle texture dots
                for _ in range(5):
                    noise_x = x + random.randint(5, tile_size - 5)
                    noise_y = y + random.randint(5, tile_size - 5)
                    size = random.randint(2, 4)
                    draw.ellipse(
                        [(noise_x-size, noise_y-size), (noise_x+size, noise_y+size)],
                        fill=(max(0, tile_r-15), max(0, tile_g-15), max(0, tile_b-15))
                    )
                
                # Add subtle grain
                for i in range(0, tile_size, 2):
                    grain_y = y + i
                    if grain_y < y + tile_size:
                        grain_variation = random.randint(-8, 8)
                        draw.line(
                            [(x, grain_y), (x + tile_size, grain_y)],
                            fill=(max(0, tile_r+grain_variation), max(0, tile_g+grain_variation), max(0, tile_b+grain_variation)),
                            width=1
                        )
    
    return img

def add_marble_effect(img, base_color):
    """Add marble-like veining effect"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    # Create veining pattern
    for _ in range(8):
        start_x = random.randint(0, width)
        start_y = random.randint(0, height)
        
        # Create curved vein
        points = []
        for i in range(20):
            x = start_x + i * (width // 20) + random.randint(-30, 30)
            y = start_y + random.randint(-50, 50) * math.sin(i * 0.3)
            points.append((x, y))
        
        # Draw vein
        for i in range(len(points) - 1):
            r, g, b = base_color
            vein_color = (max(0, r-40), max(0, g-40), max(0, b-40))
            draw.line([points[i], points[i+1]], fill=vein_color, width=3)
    
    return img

def add_wood_effect(img, base_color):
    """Add wood grain effect"""
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    # Create wood grain lines
    for y in range(0, height, 5):
        variation = random.randint(-20, 20)
        r, g, b = base_color
        line_color = (max(0, r+variation), max(0, g+variation), max(0, b+variation))
        
        # Wavy grain lines
        points = []
        for x in range(0, width, 10):
            y_offset = random.randint(-3, 3)
            points.append((x, y + y_offset))
        
        if len(points) > 1:
            for i in range(len(points) - 1):
                draw.line([points[i], points[i+1]], fill=line_color, width=2)
    
    return img

def create_realistic_tile_image(category_name, width=1200, height=600):
    """Create a realistic tile image based on category"""
    
    # Define colors and patterns for each category
    tile_configs = {
        'wall-tiles': {
            'tile_color': (240, 240, 245),  # Light gray/white
            'grout_color': (200, 200, 205),
            'tile_size': 60,
            'pattern': 'glossy',
            'effect': None
        },
        'floor-tiles': {
            'tile_color': (180, 160, 140),  # Beige/brown
            'grout_color': (150, 130, 110),
            'tile_size': 80,
            'pattern': 'matte',
            'effect': None
        },
        'bathroom-tiles': {
            'tile_color': (220, 240, 250),  # Light blue/white
            'grout_color': (180, 200, 210),
            'tile_size': 50,
            'pattern': 'glossy',
            'effect': None
        },
        'kitchen-tiles': {
            'tile_color': (250, 245, 240),  # Cream/white
            'grout_color': (220, 215, 210),
            'tile_size': 45,
            'pattern': 'glossy',
            'effect': None
        },
        'parking-tiles': {
            'tile_color': (100, 100, 100),  # Dark gray
            'grout_color': (70, 70, 70),
            'tile_size': 100,
            'pattern': 'matte',
            'effect': None
        },
        'sanitary-ware': {
            'tile_color': (255, 255, 255),  # Pure white
            'grout_color': (230, 230, 230),
            'tile_size': 60,
            'pattern': 'glossy',
            'effect': None
        },
        'vitrified-tiles': {
            'tile_color': (200, 190, 180),  # Beige
            'grout_color': (170, 160, 150),
            'tile_size': 80,
            'pattern': 'glossy',
            'effect': 'marble'
        },
        'ceramic-tiles': {
            'tile_color': (220, 220, 225),  # Light gray
            'grout_color': (190, 190, 195),
            'tile_size': 60,
            'pattern': 'glossy',
            'effect': None
        },
        'porcelain-tiles': {
            'tile_color': (210, 200, 190),  # Light beige
            'grout_color': (180, 170, 160),
            'tile_size': 90,
            'pattern': 'glossy',
            'effect': None
        },
        'marble-tiles': {
            'tile_color': (250, 245, 240),  # White marble
            'grout_color': (220, 215, 210),
            'tile_size': 70,
            'pattern': 'glossy',
            'effect': 'marble'
        }
    }
    
    # Get config for this category
    config = tile_configs.get(category_name, tile_configs['wall-tiles'])
    
    # Create base tile pattern
    img = create_tile_pattern(
        width, height,
        config['tile_size'],
        config['tile_color'],
        config['grout_color'],
        config['pattern']
    )
    
    # Apply special effects
    if config['effect'] == 'marble':
        img = add_marble_effect(img, config['tile_color'])
    elif config['effect'] == 'wood':
        img = add_wood_effect(img, config['tile_color'])
    
    # Add subtle shadow/depth
    img = img.filter(ImageFilter.SMOOTH_MORE)
    
    # Enhance contrast slightly
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.1)
    
    # Add subtle brightness
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(1.05)
    
    return img

def create_carousel_image(category_name, width=1920, height=800):
    """Create carousel image with tile pattern and text overlay"""
    # Create tile background
    img = create_realistic_tile_image(category_name, width, height)
    
    # Add dark overlay for text readability
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 120))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    
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

print("Generating realistic tile images...")
print("=" * 50)

# Categories list
categories = [
    'wall-tiles', 'floor-tiles', 'bathroom-tiles', 'kitchen-tiles',
    'parking-tiles', 'sanitary-ware', 'vitrified-tiles', 'ceramic-tiles',
    'porcelain-tiles', 'marble-tiles'
]

# Generate carousel images (6 for home page)
carousel_categories = categories[:6]
for category in carousel_categories:
    img = create_carousel_image(category, width=1920, height=800)
    filename = f"carousel-{category}.jpg"
    img.save(f"{base_dir}/home/{filename}", "JPEG", quality=90, optimize=True)
    print(f"✓ Created carousel: {filename}")

# Generate category banner images
for category in categories:
    img = create_realistic_tile_image(category, width=1200, height=400)
    img.save(f"{base_dir}/categories/{category}/category-banner.jpg", "JPEG", quality=90, optimize=True)
    print(f"✓ Created banner: {category}/category-banner.jpg")

# Generate products page images
for category in categories:
    img = create_realistic_tile_image(category, width=600, height=400)
    filename = f"{category}.jpg"
    img.save(f"{base_dir}/{filename}", "JPEG", quality=90, optimize=True)
    print(f"✓ Created product: {filename}")

# Generate about page images
about_images = [
    ('warehouse.jpg', (180, 180, 180), 'matte'),
    ('showroom.jpg', (250, 250, 250), 'glossy'),
    ('team.jpg', (240, 240, 245), 'glossy')
]

for filename, color, pattern in about_images:
    img = create_tile_pattern(800, 600, 60, color, (200, 200, 200), pattern)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img.save(f"{base_dir}/{filename}", "JPEG", quality=90, optimize=True)
    print(f"✓ Created about: {filename}")

print("=" * 50)
print(f"✅ All realistic tile images generated successfully!")
print(f"Total images: {len(carousel_categories) + len(categories) + len(categories) + len(about_images)}")


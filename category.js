// Product category page functionality

document.addEventListener('DOMContentLoaded', function() {
    initCategoryPage();
});

function initCategoryPage() {
    // Get category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'wall-tiles';
    
    // Category data
    const categoryData = {
        'wall-tiles': {
            title: 'Wall Tiles',
            description: 'Transform your walls with our premium collection of wall tiles. Available in various sizes, colors, and finishes to match any interior design.',
            bannerImage: 'wall-tiles.jpg',
            products: [
                { name: 'Classic White Wall Tiles', sizes: '30x60cm, 30x30cm', image: 'wall-tiles-1.jpg' },
                { name: 'Marble Effect Wall Tiles', sizes: '30x60cm, 60x60cm', image: 'wall-tiles-2.jpg' },
                { name: 'Subway Wall Tiles', sizes: '15x30cm, 20x40cm', image: 'wall-tiles-3.jpg' },
                { name: 'Mosaic Wall Tiles', sizes: '10x10cm, 15x15cm', image: 'wall-tiles-4.jpg' },
                { name: 'Textured Wall Tiles', sizes: '30x60cm, 30x30cm', image: 'wall-tiles-5.jpg' },
                { name: 'Glossy Wall Tiles', sizes: '30x60cm, 60x60cm', image: 'wall-tiles-6.jpg' }
            ]
        },
        'floor-tiles': {
            title: 'Floor Tiles',
            description: 'Durable and elegant floor tiles perfect for any space. From residential to commercial applications, we have the perfect solution for your flooring needs.',
            bannerImage: 'floor-tiles.jpg',
            products: [
                { name: 'Wood Effect Floor Tiles', sizes: '60x60cm, 80x80cm', image: 'floor-tiles-1.jpg' },
                { name: 'Stone Effect Floor Tiles', sizes: '60x60cm, 100x100cm', image: 'floor-tiles-2.jpg' },
                { name: 'Polished Floor Tiles', sizes: '60x60cm, 80x80cm', image: 'floor-tiles-3.jpg' },
                { name: 'Anti-Slip Floor Tiles', sizes: '30x30cm, 60x60cm', image: 'floor-tiles-4.jpg' },
                { name: 'Large Format Floor Tiles', sizes: '80x80cm, 100x100cm', image: 'floor-tiles-5.jpg' },
                { name: 'Patterned Floor Tiles', sizes: '60x60cm, 80x80cm', image: 'floor-tiles-6.jpg' }
            ]
        },
        'bathroom-tiles': {
            title: 'Bathroom Tiles',
            description: 'Water-resistant and stylish bathroom tiles that combine functionality with beautiful design. Perfect for creating stunning bathroom spaces.',
            bannerImage: 'bathroom-tiles.jpg',
            products: [
                { name: 'Waterproof Bathroom Tiles', sizes: '30x30cm, 30x60cm', image: 'bathroom-tiles-1.jpg' },
                { name: 'Glass Mosaic Tiles', sizes: '10x10cm, 15x15cm', image: 'bathroom-tiles-2.jpg' },
                { name: 'Ceramic Bathroom Tiles', sizes: '30x30cm, 30x60cm', image: 'bathroom-tiles-3.jpg' },
                { name: 'Natural Stone Tiles', sizes: '30x30cm, 30x60cm', image: 'bathroom-tiles-4.jpg' },
                { name: 'Metro Bathroom Tiles', sizes: '15x30cm, 20x40cm', image: 'bathroom-tiles-5.jpg' },
                { name: 'Luxury Bathroom Tiles', sizes: '30x60cm, 60x60cm', image: 'bathroom-tiles-6.jpg' }
            ]
        },
        'kitchen-tiles': {
            title: 'Kitchen Tiles',
            description: 'Heat-resistant and easy-to-clean kitchen tiles that make cooking spaces both practical and beautiful. Perfect for backsplashes and flooring.',
            bannerImage: 'kitchen-tiles.jpg',
            products: [
                { name: 'Heat Resistant Kitchen Tiles', sizes: '30x60cm, 60x60cm', image: 'kitchen-tiles-1.jpg' },
                { name: 'Backsplash Tiles', sizes: '15x15cm, 20x20cm', image: 'kitchen-tiles-2.jpg' },
                { name: 'Stain Resistant Tiles', sizes: '30x30cm, 30x60cm', image: 'kitchen-tiles-3.jpg' },
                { name: 'Subway Kitchen Tiles', sizes: '15x30cm, 20x40cm', image: 'kitchen-tiles-4.jpg' },
                { name: 'Glossy Kitchen Tiles', sizes: '30x60cm, 60x60cm', image: 'kitchen-tiles-5.jpg' },
                { name: 'Pattern Kitchen Tiles', sizes: '30x30cm, 30x60cm', image: 'kitchen-tiles-6.jpg' }
            ]
        },
        'parking-tiles': {
            title: 'Parking Tiles',
            description: 'Heavy-duty parking tiles designed to withstand vehicle loads while maintaining aesthetic appeal. Perfect for driveways and parking areas.',
            bannerImage: 'parking-tiles.jpg',
            products: [
                { name: 'Heavy Duty Parking Tiles', sizes: '30x30cm, 40x40cm', image: 'parking-tiles-1.jpg' },
                { name: 'Anti-Slip Parking Tiles', sizes: '30x30cm, 50x50cm', image: 'parking-tiles-2.jpg' },
                { name: 'Drainage Parking Tiles', sizes: '30x30cm, 40x40cm', image: 'parking-tiles-3.jpg' },
                { name: 'Concrete Parking Tiles', sizes: '30x30cm, 50x50cm', image: 'parking-tiles-4.jpg' },
                { name: 'Patterned Parking Tiles', sizes: '30x30cm, 40x40cm', image: 'parking-tiles-5.jpg' },
                { name: 'Colored Parking Tiles', sizes: '30x30cm, 50x50cm', image: 'parking-tiles-6.jpg' }
            ]
        },
        'sanitary-ware': {
            title: 'Sanitary Ware',
            description: 'Complete range of sanitary ware including basins, toilets, and bathroom accessories. High-quality products for modern bathrooms.',
            bannerImage: 'sanitary-ware.jpg',
            products: [
                { name: 'Modern Wash Basins', sizes: 'Various Sizes', image: 'sanitary-1.jpg' },
                { name: 'Comfort Height Toilets', sizes: 'Standard Size', image: 'sanitary-2.jpg' },
                { name: 'Wall Hung Basins', sizes: 'Various Sizes', image: 'sanitary-3.jpg' },
                { name: 'Bathroom Accessories', sizes: 'Various Sizes', image: 'sanitary-4.jpg' },
                { name: 'Bathroom Mirrors', sizes: 'Various Sizes', image: 'sanitary-5.jpg' },
                { name: 'Shower Enclosures', sizes: 'Various Sizes', image: 'sanitary-6.jpg' }
            ]
        },
        'vitrified-tiles': {
            title: 'Vitrified Tiles',
            description: 'Premium vitrified tiles with superior strength and durability. Perfect for high-traffic areas and modern interiors.',
            bannerImage: 'vitrified-tiles.jpg',
            products: [
                { name: 'Double Charge Vitrified', sizes: '60x60cm, 80x80cm', image: 'vitrified-1.jpg' },
                { name: 'Glazed Vitrified Tiles', sizes: '60x60cm, 100x100cm', image: 'vitrified-2.jpg' },
                { name: 'Polished Vitrified', sizes: '60x60cm, 80x80cm', image: 'vitrified-3.jpg' },
                { name: 'Digital Vitrified', sizes: '60x60cm, 80x80cm', image: 'vitrified-4.jpg' },
                { name: 'Large Format Vitrified', sizes: '80x80cm, 100x100cm', image: 'vitrified-5.jpg' },
                { name: 'Anti-Slip Vitrified', sizes: '60x60cm, 80x80cm', image: 'vitrified-6.jpg' }
            ]
        },
        'ceramic-tiles': {
            title: 'Ceramic Tiles',
            description: 'High-quality ceramic tiles in various designs and finishes. Perfect for both residential and commercial applications.',
            bannerImage: 'ceramic-tiles.jpg',
            products: [
                { name: 'Glazed Ceramic Tiles', sizes: '30x30cm, 30x60cm', image: 'ceramic-1.jpg' },
                { name: 'Unglazed Ceramic Tiles', sizes: '30x30cm, 60x60cm', image: 'ceramic-2.jpg' },
                { name: 'Textured Ceramic Tiles', sizes: '30x30cm, 30x60cm', image: 'ceramic-3.jpg' },
                { name: 'Pattern Ceramic Tiles', sizes: '30x30cm, 30x60cm', image: 'ceramic-4.jpg' },
                { name: 'Solid Color Ceramic', sizes: '30x30cm, 60x60cm', image: 'ceramic-5.jpg' },
                { name: 'Decorative Ceramic', sizes: '30x30cm, 30x60cm', image: 'ceramic-6.jpg' }
            ]
        },
        'porcelain-tiles': {
            title: 'Porcelain Tiles',
            description: 'Dense and durable porcelain tiles that are perfect for both indoor and outdoor applications. Known for their strength and low maintenance.',
            bannerImage: 'porcelain-tiles.jpg',
            products: [
                { name: 'Full Body Porcelain', sizes: '60x60cm, 80x80cm', image: 'porcelain-1.jpg' },
                { name: 'Glazed Porcelain Tiles', sizes: '60x60cm, 120x60cm', image: 'porcelain-2.jpg' },
                { name: 'Outdoor Porcelain', sizes: '60x60cm, 80x80cm', image: 'porcelain-3.jpg' },
                { name: 'Large Format Porcelain', sizes: '80x80cm, 120x60cm', image: 'porcelain-4.jpg' },
                { name: 'Thin Porcelain Tiles', sizes: '60x60cm, 80x80cm', image: 'porcelain-5.jpg' },
                { name: 'Textured Porcelain', sizes: '60x60cm, 80x80cm', image: 'porcelain-6.jpg' }
            ]
        },
        'marble-tiles': {
            title: 'Marble Tiles',
            description: 'Elegant marble tiles that bring luxury and sophistication to any space. Available in various natural patterns and finishes.',
            bannerImage: 'marble-tiles.jpg',
            products: [
                { name: 'White Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-1.jpg' },
                { name: 'Black Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-2.jpg' },
                { name: 'Carrara Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-3.jpg' },
                { name: 'Calacatta Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-4.jpg' },
                { name: 'Polished Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-5.jpg' },
                { name: 'Honed Marble Tiles', sizes: '30x30cm, 60x60cm', image: 'marble-6.jpg' }
            ]
        }
    };
    
    // Update page content based on category
    updateCategoryContent(category, categoryData[category] || categoryData['wall-tiles']);
}

function updateCategoryContent(category, data) {
    // Update banner
    const bannerImage = document.getElementById('categoryBanner');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    if (bannerImage) {
        bannerImage.style.backgroundImage = `url('${data.bannerImage}')`;
    }
    
    if (categoryTitle) {
        categoryTitle.textContent = data.title;
    }
    
    if (categoryDescription) {
        categoryDescription.textContent = data.description;
    }
    
    // Update page title
    document.title = `${data.title} - SATAPARA CERAMIC TRADE`;
    
    // Generate product list
    generateProductList(data.products);
}

function generateProductList(products) {
    const productList = document.getElementById('productList');
    
    if (!productList) return;
    
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='placeholder.jpg'">
                <div class="product-overlay">
                    <button class="view-category-btn">View Details</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="sizes">Sizes: ${product.sizes}</p>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
}

// Add smooth scrolling for category page
function initCategoryScrollEffects() {
    // Smooth scroll to product list when clicking on category items
    const categoryItems = document.querySelectorAll('.product-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('onclick');
            if (href && href.includes('product-category.html')) {
                // Extract category from onclick
                const categoryMatch = href.match(/category=([^']+)/);
                if (categoryMatch) {
                    const category = categoryMatch[1];
                    window.location.href = `product-category.html?category=${category}`;
                }
            }
        });
    });
}

// Initialize category scroll effects
initCategoryScrollEffects();

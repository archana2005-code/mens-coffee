// ====================================
// MEN'S COFFICE - PREMIUM E-COMMERCE JS
// ====================================

// Products Data
const products = [
    {
        id: 1,
        name: "Midnight Black Coffee",
        category: "espresso",
        shortDescription: "Bold, intense, and mysterious",
        fullDescription: "Experience the epitome of dark roast excellence. Our Midnight Black Coffee is crafted from the finest high-altitude beans, roasted to perfection to deliver an intense, full-bodied flavor with notes of dark chocolate, roasted nuts, and a hint of smokiness. Perfect for those who crave a powerful coffee experience.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/Cold Brew Reserve.jpg",
        ingredients: "100% Arabica Coffee Beans",
        roastLevel: "Dark",
        flavorNotes: "Dark Chocolate, Roasted Nuts, Smoky",
        strength: "Strong",
        weight: "250g / 8.8oz",
        brewing: "Espresso, French Press, Cold Brew",
        rating: 4.9,
        reviews: 284,
        price: 24.99,
        originalPrice: 29.99,
        badge: "bestseller"
    },
    {
        id: 2,
        name: "Classic Americano",
        category: "espresso",
        shortDescription: "Timeless, smooth, and balanced",
        fullDescription: "A tribute to the classic American coffee tradition. Our Classic Americano blend combines carefully selected beans from Brazil and Colombia to create a smooth, well-balanced cup with subtle notes of caramel and toasted bread. An everyday companion for the modern gentleman.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/bean3.jpg",
        ingredients: "Brazilian & Colombian Arabica Blend",
        roastLevel: "Medium-Dark",
        flavorNotes: "Caramel, Toasted Bread, Nutty",
        strength: "Medium",
        weight: "250g / 8.8oz",
        brewing: "Drip, Pour Over, French Press",
        rating: 4.8,
        reviews: 312,
        price: 22.99,
        originalPrice: null,
        badge: null
    },
    {
        id: 3,
        name: "Signature Latte",
        category: "latte",
        shortDescription: "Creamy, velvety, luxurious",
        fullDescription: "The cornerstone of our collection, the Signature Latte blend is specially crafted for milk-based drinks. With its low acidity and rich crema, this blend shines when paired with steamed milk. Notes of vanilla, honey, and subtle fruit create a harmonious symphony of flavors.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/signature latte.jpg",
        ingredients: "Single-Origin Ethiopian Yirgacheffe",
        roastLevel: "Medium",
        flavorNotes: "Vanilla, Honey, Stone Fruit",
        strength: "Medium",
        weight: "250g / 8.8oz",
        brewing: "Espresso Machine, Moka Pot",
        rating: 4.7,
        reviews: 198,
        price: 26.99,
        originalPrice: 32.99,
        badge: "sale"
    },
    {
        id: 4,
        name: "Vanilla Latte",
        category: "latte",
        shortDescription: "Sweet, aromatic, indulgent",
        fullDescription: "Indulge in the perfect marriage of premium espresso and natural vanilla essence. Our Vanilla Latte blend starts with our finest Arabica beans, infused with Madagascar bourbon vanilla during the roasting process. The result is a luxuriously smooth coffee with a sweet, creamy finish.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/Vanilla Latte.jpg",
        ingredients: "Arabica Beans with Natural Vanilla",
        roastLevel: "Medium",
        flavorNotes: "Vanilla, Caramel, Cream",
        strength: "Mild",
        weight: "250g / 8.8oz",
        brewing: "Espresso Machine, Aeropress",
        rating: 4.6,
        reviews: 167,
        price: 27.99,
        originalPrice: null,
        badge: "new"
    },
    {
        id: 5,
        name: "Cappuccino Royale",
        category: "latte",
        shortDescription: "Regal, rich, sophisticated",
        fullDescription: "Fit for royalty, the Cappuccino Royale blend is our tribute to the Italian coffee tradition. A masterful blend of Indian and Brazilian beans creates a rich, complex base with excellent crema development. Notes of cocoa, dried fruit, and a hint of citrus make every sip memorable.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/royal.jpg",
        ingredients: "Indian & Brazilian Arabica Blend",
        roastLevel: "Medium-Dark",
        flavorNotes: "Cocoa, Dried Fruit, Citrus",
        strength: "Medium-Strong",
        weight: "250g / 8.8oz",
        brewing: "Espresso Machine, Stovetop",
        rating: 4.8,
        reviews: 245,
        price: 28.99,
        originalPrice: null,
        badge: "bestseller"
    },
    {
        id: 6,
        name: "Mocha Supreme",
        category: "specialty",
        shortDescription: "Chocolatey, rich, decadent",
        fullDescription: "Where coffee meets chocolate in perfect harmony. Our Mocha Supreme combines premium Ethiopian coffee with rich African cocoa for an indulgent experience. The natural sweetness of the beans pairs beautifully with the chocolate notes, creating a dessert-like quality without overwhelming sweetness.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/Mocha Supreme.jpg",
        ingredients: "Ethiopian Coffee with African Cocoa",
        roastLevel: "Medium",
        flavorNotes: "Dark Chocolate, Berry, Coffee",
        strength: "Medium",
        weight: "250g / 8.8oz",
        brewing: "Espresso, French Press, Pour Over",
        rating: 4.7,
        reviews: 189,
        price: 29.99,
        originalPrice: 34.99,
        badge: "sale"
    },
    {
        id: 7,
        name: "Hazelnut Espresso",
        category: "espresso",
        shortDescription: "Nutty, smooth, aromatic",
        fullDescription: "A timeless classic reimagined for the modern palate. Our Hazelnut Espresso features premium Italian-roast beans infused with natural hazelnut essence. The result is a smooth, nutty espresso with a velvety mouthfeel and lingering sweetness that pairs perfectly with milk.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/hazalnut latte.jpg",
        ingredients: "Italian Roast with Natural Hazelnut",
        roastLevel: "Dark",
        flavorNotes: "Hazelnut, Chocolate, Vanilla",
        strength: "Strong",
        weight: "250g / 8.8oz",
        brewing: "Espresso, Moka Pot",
        rating: 4.5,
        reviews: 156,
        price: 25.99,
        originalPrice: null,
        badge: null
    },
    {
        id: 8,
        name: "Caramel Macchiato",
        category: "specialty",
        shortDescription: "Sweet, buttery, comforting",
        fullDescription: "Inspired by the beloved caf favorite, our Caramel Macchiato blend brings the coffeehouse experience to your home. Rich espresso beans are complemented by natural caramel notes, creating a buttery smooth flavor profile with hints of vanilla and toffee.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/bean2.jpg",
        ingredients: "Premium Arabica with Caramel Notes",
        roastLevel: "Medium",
        flavorNotes: "Caramel, Toffee, Vanilla",
        strength: "Medium",
        weight: "250g / 8.8oz",
        brewing: "Espresso Machine, Pour Over",
        rating: 4.6,
        reviews: 201,
        price: 26.99,
        originalPrice: null,
        badge: "new"
    },
    {
        id: 9,
        name: "Irish Cream Blend",
        category: "specialty",
        shortDescription: "Whiskey-aged, smooth, warming",
        fullDescription: "Inspired by the classic Irish whiskey tradition, our Irish Cream Blend offers a sophisticated twist. Premium beans are aged in whiskey barrels before roasting, imparting subtle oak and vanilla notes. A touch of cream essence creates a smooth, warming finish reminiscent of the beloved Irish coffee.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/Irish Cream Blend.jpg",
        ingredients: "Whiskey-Barrel Aged Arabica",
        roastLevel: "Medium-Dark",
        flavorNotes: "Oak, Vanilla, Cream, Whiskey",
        strength: "Strong",
        weight: "250g / 8.8oz",
        brewing: "French Press, Cold Brew, Espresso",
        rating: 4.8,
        reviews: 143,
        price: 32.99,
        originalPrice: null,
        badge: "bestseller"
    },
    {
        id: 10,
        name: "Cold Brew Reserve",
        category: "cold",
        shortDescription: "Smooth, refreshing, versatile",
        fullDescription: "Specifically crafted for cold brewing, our Cold Brew Reserve features a unique blend of African and Central American beans. A lighter roast profile preserves the natural fruit sweetness while minimizing acidity. The result is an incredibly smooth, refreshing cold coffee with notes of stone fruit, chocolate, and citrus.",
        image: "C:/Users/Soni Sharma/Desktop/men's coffee/image.jpg/latte.jpg",
        ingredients: "African & Central American Blend",
        roastLevel: "Light-Medium",
        flavorNotes: "Stone Fruit, Chocolate, Citrus",
        strength: "Mild",
        weight: "300g / 10.6oz",
        brewing: "Cold Brew, Iced Coffee",
        rating: 4.9,
        reviews: 267,
        price: 28.99,
        originalPrice: 35.99,
        badge: "new"
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('mensCoffeeCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('mensCoffeeWishlist')) || [];

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeWishlist = document.getElementById('closeWishlist');
const overlay = document.getElementById('overlay');
const backToTop = document.getElementById('backToTop');
const preloader = document.getElementById('preloader');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);

    // Render products
    renderFeaturedProducts();
    renderShopProducts(products);
    renderBestsellers();
    updateCartUI();
    updateWishlistUI();
    initializeAnimations();
    initializeFAQs();
    initializeForms();
    initializePolicyModals();
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Search Modal
searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    document.getElementById('searchInput').focus();
});

closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
    }
});

// Cart Sidebar
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Wishlist Sidebar
wishlistBtn.addEventListener('click', () => {
    wishlistSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeWishlist.addEventListener('click', () => {
    wishlistSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Overlay click handler
overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    wishlistSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Back to top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Product Card Template
function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const isInCart = cart.some(item => item.id === product.id);

    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badges">
                    ${product.badge === 'new' ? '<span class="product-badge badge-new">New</span>' : ''}
                    ${product.badge === 'sale' ? '<span class="product-badge badge-sale">Sale</span>' : ''}
                    ${product.badge === 'bestseller' ? '<span class="product-badge badge-bestseller">Bestseller</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn wishlist-toggle ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <button class="quick-view-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-buttons">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        ${isInCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                    <button class="btn btn-secondary buy-now" data-id="${product.id}">Buy Now</button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Render Featured Products (first 4)
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = products.slice(0, 4);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

// Render Shop Products
function renderShopProducts(productsToRender) {
    const container = document.getElementById('shopProducts');
    container.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

// Render Bestsellers
function renderBestsellers() {
    const container = document.getElementById('bestsellersSlider');
    const bestsellers = products.filter(p => p.badge === 'bestseller');
    container.innerHTML = bestsellers.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

// Attach Product Event Listeners
function attachProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });

    // Buy now buttons
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            openCheckout();
        });
    });

    // Wishlist toggles
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.closest('.wishlist-toggle').dataset.id);
            toggleWishlist(productId);
        });
    });

    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.quick-view-btn').dataset.id);
            openQuickView(productId);
        });
    });
}

// Filter Products
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        let filteredProducts = products;

        if (filter !== 'all') {
            filteredProducts = products.filter(p => p.category === filter);
        }

        renderShopProducts(filteredProducts);
    });
});

// Sort Products
document.getElementById('sortProducts').addEventListener('change', (e) => {
    let sortedProducts = [...products];
    const sortBy = e.target.value;

    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
            break;
    }

    renderShopProducts(sortedProducts);
});

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('mensCoffeeCart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.querySelector('.cart-count');

    // Update badge count
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'flex';
        cartFooter.style.display = 'none';
    } else {
        cartItems.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');

        // Update subtotal
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.querySelector('.subtotal-amount').textContent = `$${subtotal.toFixed(2)}`;

        // Attach cart item event listeners
        attachCartItemListeners();
    }

    // Update product buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        const productId = parseInt(btn.dataset.id);
        const inCart = cart.some(item => item.id === productId);
        btn.textContent = inCart ? 'In Cart' : 'Add to Cart';
    });
}

function createCartItemHTML(item) {
    return `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-qty">
                    <button class="qty-minus"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button class="qty-plus"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="cart-item-remove"><i class="fas fa-times"></i></button>
        </div>
    `;
}

function attachCartItemListeners() {
    document.querySelectorAll('.cart-item').forEach(item => {
        const productId = parseInt(item.dataset.id);

        item.querySelector('.qty-minus').addEventListener('click', () => {
            updateCartQuantity(productId, -1);
        });

        item.querySelector('.qty-plus').addEventListener('click', () => {
            updateCartQuantity(productId, 1);
        });

        item.querySelector('.cart-item-remove').addEventListener('click', () => {
            removeFromCart(productId);
        });
    });
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification('Added to wishlist!');
    }

    saveWishlist();
    updateWishlistUI();
}

function saveWishlist() {
    localStorage.setItem('mensCoffeeWishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    const wishlistItems = document.getElementById('wishlistItems');
    const wishlistEmpty = document.getElementById('wishlistEmpty');
    const wishlistCount = document.querySelector('.wishlist-count');

    // Update badge count
    wishlistCount.textContent = wishlist.length;

    if (wishlist.length === 0) {
        wishlistItems.style.display = 'none';
        wishlistEmpty.style.display = 'flex';
    } else {
        wishlistItems.style.display = 'block';
        wishlistEmpty.style.display = 'none';
        wishlistItems.innerHTML = wishlist.map(item => createWishlistItemHTML(item)).join('');

        // Attach wishlist item event listeners
        attachWishlistItemListeners();
    }

    // Update wishlist toggles on product cards
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
        const productId = parseInt(btn.dataset.id);
        const inWishlist = wishlist.some(item => item.id === productId);
        btn.classList.toggle('active', inWishlist);
    });
}

function createWishlistItemHTML(item) {
    return `
        <div class="wishlist-item" data-id="${item.id}">
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="wishlist-item-info">
                <h4 class="wishlist-item-name">${item.name}</h4>
                <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <button class="wishlist-item-remove"><i class="fas fa-times"></i></button>
            <style>
                .wishlist-item { display: flex; align-items: center; gap: 15px; padding: 15px 0; border-bottom: 1px solid var(--secondary-beige); }
                .wishlist-item-image { width: 70px; height: 70px; border-radius: 8px; overflow: hidden; }
                .wishlist-item-image img { width: 100%; height: 100%; object-fit: cover; }
                .wishlist-item-info { flex: 1; }
                .wishlist-item-name { font-weight: 600; margin-bottom: 5px; }
                .wishlist-item-price { color: var(--accent-gold); font-weight: 600; }
                .wishlist-item-remove { color: var(--text-light); font-size: 16px; }
                .wishlist-item-remove:hover { color: var(--error); }
            </style>
        </div>
    `;
}

function attachWishlistItemListeners() {
    document.querySelectorAll('.wishlist-item').forEach(item => {
        const productId = parseInt(item.dataset.id);

        item.querySelector('.wishlist-item-remove').addEventListener('click', () => {
            toggleWishlist(productId);
        });

        item.querySelector('.wishlist-item-image').addEventListener('click', () => {
            openQuickView(productId);
            wishlistSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        item.querySelector('.wishlist-item-name').addEventListener('click', () => {
            openQuickView(productId);
            wishlistSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
}

// Quick View Modal
const quickviewModal = document.getElementById('quickviewModal');
const closeQuickview = document.getElementById('closeQuickview');

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);

    document.getElementById('quickviewImage').src = product.image;
    document.getElementById('quickviewName').textContent = product.name;
    document.getElementById('quickviewRating').innerHTML = generateStars(product.rating) + `<span>(${product.reviews} reviews)</span>`;
    document.getElementById('quickviewPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('quickviewOriginalPrice').textContent = product.originalPrice ? `$${product.originalPrice.toFixed(2)}` : '';
    document.getElementById('quickviewDescription').textContent = product.fullDescription;
    document.getElementById('quickviewRoast').textContent = product.roastLevel;
    document.getElementById('quickviewFlavor').textContent = product.flavorNotes;
    document.getElementById('quickviewStrength').textContent = product.strength;
    document.getElementById('quickviewWeight').textContent = product.weight;
    document.getElementById('quickviewQty').value = 1;

    // Store product ID for add to cart
    document.querySelector('.quickview-add-cart').dataset.id = product.id;
    document.querySelector('.quickview-buy').dataset.id = product.id;

    quickviewModal.classList.add('active');
}

closeQuickview.addEventListener('click', () => {
    quickviewModal.classList.remove('active');
});

quickviewModal.addEventListener('click', (e) => {
    if (e.target === quickviewModal) {
        quickviewModal.classList.remove('active');
    }
});

// Quick view quantity
document.querySelector('.quantity-selector .minus').addEventListener('click', () => {
    const input = document.getElementById('quickviewQty');
    if (input.value > 1) input.value = parseInt(input.value) - 1;
});

document.querySelector('.quantity-selector .plus').addEventListener('click', () => {
    const input = document.getElementById('quickviewQty');
    input.value = parseInt(input.value) + 1;
});

// Quick view add to cart
document.querySelector('.quickview-add-cart').addEventListener('click', (e) => {
    const productId = parseInt(e.target.dataset.id);
    const qty = parseInt(document.getElementById('quickviewQty').value);

    for (let i = 0; i < qty; i++) {
        addToCart(productId);
    }

    quickviewModal.classList.remove('active');
});

// Quick view buy now
document.querySelector('.quickview-buy').addEventListener('click', (e) => {
    const productId = parseInt(e.target.dataset.id);
    const qty = parseInt(document.getElementById('quickviewQty').value);

    for (let i = 0; i < qty; i++) {
        addToCart(productId);
    }

    quickviewModal.classList.remove('active');
    openCheckout();
});

// Checkout Modal
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');

function openCheckout() {
    updateCheckoutSummary();
    checkoutModal.classList.add('active');
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
});

// Checkout tabs
document.querySelectorAll('.checkout-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.checkout-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        const tabName = e.target.dataset.tab;
        document.getElementById('shippingSection').style.display = tabName === 'shipping' ? 'block' : 'none';
        document.getElementById('paymentSection').style.display = tabName === 'payment' ? 'block' : 'none';
    });
});

function updateCheckoutSummary() {
    const summaryItems = document.getElementById('summaryItems');
    summaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-info">
                <p class="summary-item-name">${item.name}</p>
                <p class="summary-item-qty">Qty: ${item.quantity}</p>
            </div>
            <span class="summary-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    document.querySelector('.summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.summary-tax').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('.summary-total').textContent = `$${total.toFixed(2)}`;
}

// Place order
document.getElementById('placeOrder').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    showNotification('Order placed successfully! Thank you!');
    cart = [];
    saveCart();
    updateCartUI();
    checkoutModal.classList.remove('active');
});

// Coupon code
document.getElementById('applyCoupon').addEventListener('click', () => {
    const couponInput = document.getElementById('couponInput');
    if (couponInput.value.toLowerCase() === 'menscoffee10') {
        showNotification('Coupon applied! 10% off');
    } else {
        showNotification('Invalid coupon code');
    }
});

// Initialize FAQs
function initializeFAQs() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Initialize Forms
function initializeForms() {
    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you for subscribing!');
        e.target.reset();
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!');
        e.target.reset();
    });
}

// Policy Modals
function initializePolicyModals() {
    const privacyLink = document.getElementById('privacyLink');
    const termsLink = document.getElementById('termsLink');
    const shippingLink = document.getElementById('shippingLink');
    const refundLink = document.getElementById('refundLink');

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('privacyModal').classList.add('active');
    });

    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('termsModal').classList.add('active');
    });

    shippingLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('shippingModal').classList.add('active');
    });

    refundLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('refundModal').classList.add('active');
    });

    // Close policy modals
    document.getElementById('closePrivacy').addEventListener('click', () => {
        document.getElementById('privacyModal').classList.remove('active');
    });

    document.getElementById('closeTerms').addEventListener('click', () => {
        document.getElementById('termsModal').classList.remove('active');
    });

    document.getElementById('closeShipping').addEventListener('click', () => {
        document.getElementById('shippingModal').classList.remove('active');
    });

    document.getElementById('closeRefund').addEventListener('click', () => {
        document.getElementById('refundModal').classList.remove('active');
    });

    // Close on modal click
    document.querySelectorAll('.policy-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .product-card, .collection-card, .service-card, .blog-card, .benefit-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #1a1a1a;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.querySelector('i').style.color = '#c9a86c';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to close modals
    if (e.key === 'Escape') {
        searchModal.classList.remove('active');
        quickviewModal.classList.remove('active');
        checkoutModal.classList.remove('active');
        cartSidebar.classList.remove('active');
        wishlistSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelectorAll('.policy-modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Load more products
document.getElementById('loadMoreProducts').addEventListener('click', () => {
    showNotification('All products are now displayed');
});

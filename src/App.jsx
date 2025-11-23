import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import { sampleProducts } from './data/sampleData';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Load cart and wishlist from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('shoppingCart');
        const savedWishlist = localStorage.getItem('wishlist');

        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        }

        if (savedWishlist) {
            try {
                setWishlist(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Error loading wishlist:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart]);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const categories = ['All', ...new Set(sampleProducts.map(p => p.category))];

    // Filter products based on search and category
    const filteredProducts = sampleProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Add to cart
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        // Show notification
        showNotification(`${product.name} added to cart!`, 'success');
    };

    // Update quantity
    const updateQuantity = (productId, change) => {
        const updatedCart = cart.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity + change) }
                : item
        ).filter(item => item.quantity > 0);

        setCart(updatedCart);
    };

    // Remove from cart
    const removeFromCart = (productId) => {
        const item = cart.find(i => i.id === productId);
        setCart(cart.filter(item => item.id !== productId));
        if (item) {
            showNotification(`${item.name} removed from cart`, 'info');
        }
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
        showNotification('Cart cleared', 'info');
    };

    // Toggle wishlist
    const toggleWishlist = (productId) => {
        const product = sampleProducts.find(p => p.id === productId);
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter(id => id !== productId));
            showNotification(`${product.name} removed from wishlist`, 'info');
        } else {
            setWishlist([...wishlist, productId]);
            showNotification(`${product.name} added to wishlist`, 'success');
        }
    };

    // View product detail
    const viewProduct = (product) => {
        setSelectedProduct(product);
        setCurrentPage('product-detail');
    };

    // Get wishlist products
    const wishlistProducts = sampleProducts.filter(p => wishlist.includes(p.id));

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 9.99) : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    // Simple notification system
    const showNotification = (message, type = 'success') => {
        // You can replace this with a proper toast library like react-toastify
        console.log(`[${type.toUpperCase()}] ${message}`);
    };

    return (
        <div>
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cart={cart}
                wishlist={wishlist}
            />

            {currentPage === 'home' && (
                <HomePage
                    products={sampleProducts}
                    setCurrentPage={setCurrentPage}
                    setSelectedCategory={setSelectedCategory}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    wishlist={wishlist}
                    viewProduct={viewProduct}
                />
            )}

            {currentPage === 'products' && (
                <ProductsPage
                    products={filteredProducts}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    wishlist={wishlist}
                    viewProduct={viewProduct}
                />
            )}

            {currentPage === 'product-detail' && (
                <ProductDetailPage
                    product={selectedProduct}
                    setCurrentPage={setCurrentPage}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    wishlist={wishlist}
                    subtotal={subtotal}
                />
            )}

            {currentPage === 'cart' && (
                <CartPage
                    cart={cart}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    setCurrentPage={setCurrentPage}
                    subtotal={subtotal}
                    shipping={shipping}
                    tax={tax}
                    total={total}
                />
            )}

            {currentPage === 'wishlist' && (
                <WishlistPage
                    wishlistProducts={wishlistProducts}
                    setCurrentPage={setCurrentPage}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    viewProduct={viewProduct}
                />
            )}
        </div>
    );
}

export default App;
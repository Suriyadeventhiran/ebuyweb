import React from 'react';
import { ShoppingCart, Heart, User, Home, Package } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, cart, wishlist }) => {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <h1
                            onClick={() => setCurrentPage('home')}
                            className="text-3xl font-bold cursor-pointer hover:opacity-90 transition flex items-center gap-2"
                        >
                            🛍️ <span>ShopZone</span>
                        </h1>
                        <nav className="hidden md:flex space-x-2">
                            <button
                                onClick={() => setCurrentPage('home')}
                                className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${currentPage === 'home'
                                        ? 'bg-white/20 text-white'
                                        : 'hover:bg-white/10 text-white/90'
                                    }`}
                            >
                                <Home size={18} />
                                Home
                            </button>
                            <button
                                onClick={() => setCurrentPage('products')}
                                className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${currentPage === 'products'
                                        ? 'bg-white/20 text-white'
                                        : 'hover:bg-white/10 text-white/90'
                                    }`}
                            >
                                <Package size={18} />
                                Products
                            </button>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="p-2.5 hover:bg-white/20 rounded-full transition" title="Account">
                            <User size={22} />
                        </button>
                        <button
                            onClick={() => setCurrentPage('wishlist')}
                            className="p-2.5 hover:bg-white/20 rounded-full transition relative"
                            title="Wishlist"
                        >
                            <Heart size={22} />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                    {wishlist.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setCurrentPage('cart')}
                            className="p-2.5 hover:bg-white/20 rounded-full transition relative"
                            title="Shopping Cart"
                        >
                            <ShoppingCart size={22} />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
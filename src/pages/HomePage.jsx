import React from 'react';
import { Heart } from 'lucide-react';

const HomePage = ({ products, setCurrentPage, setSelectedCategory, addToCart, toggleWishlist, wishlist, viewProduct }) => {
    const categories = ['Electronics', 'Accessories'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Welcome to ShopZone</h1>
                    <p className="text-xl mb-8 opacity-90">Discover amazing products at unbeatable prices</p>
                    <button
                        onClick={() => setCurrentPage('products')}
                        className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition transform hover:scale-105"
                    >
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage('products');
                            }}
                            className={`${index === 0
                                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                                    : 'bg-gradient-to-br from-pink-500 to-orange-500'
                                } rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition transform shadow-xl`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{category}</h3>
                            <p className="opacity-90">Explore our {category.toLowerCase()} collection</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 4).map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover cursor-pointer"
                                    onClick={() => viewProduct(product)}
                                />
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                                >
                                    <Heart
                                        size={18}
                                        className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                                    />
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                                <p className="text-2xl font-bold text-purple-600 mb-3">${product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
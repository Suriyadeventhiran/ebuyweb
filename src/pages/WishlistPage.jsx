import React from 'react';
import { Heart } from 'lucide-react';

const WishlistPage = ({
    wishlistProducts,
    setCurrentPage,
    addToCart,
    toggleWishlist,
    viewProduct
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">My Wishlist</h1>

                {wishlistProducts.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-xl p-16 text-center">
                        <Heart size={80} className="mx-auto text-gray-300 mb-6" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your wishlist is empty</h2>
                        <button
                            onClick={() => setCurrentPage('products')}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
                        >
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wishlistProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover cursor-pointer"
                                        onClick={() => viewProduct(product)}
                                    />
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                                    >
                                        <Heart size={18} className="fill-red-500 text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
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
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
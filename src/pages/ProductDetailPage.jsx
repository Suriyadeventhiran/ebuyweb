import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';

const ProductDetailPage = ({
    product,
    setCurrentPage,
    addToCart,
    toggleWishlist,
    wishlist,
    subtotal
}) => {
    if (!product) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <button
                    onClick={() => setCurrentPage('products')}
                    className="flex items-center text-gray-600 hover:text-purple-600 mb-6 transition"
                >
                    <ChevronRight size={20} className="transform rotate-180" />
                    Back to Products
                </button>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>

                        {/* Product Details */}
                        <div>
                            <div className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full inline-block mb-4 font-semibold">
                                {product.category}
                            </div>
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>

                            <div className="flex items-center mb-4">
                                <span className="text-yellow-400 text-2xl">★</span>
                                <span className="text-xl text-gray-600 ml-2">{product.rating}</span>
                            </div>

                            <p className="text-5xl font-bold text-purple-600 mb-6">${product.price}</p>

                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                <p className="text-green-700 font-semibold">✓ {product.stock} items in stock</p>
                                {subtotal > 100 && <p className="text-green-700">✓ Free shipping on orders over $100</p>}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => {
                                        addToCart(product);
                                        setCurrentPage('cart');
                                    }}
                                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition font-semibold text-lg"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className="px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
                                >
                                    <Heart
                                        size={24}
                                        className={wishlist.includes(product.id) ? 'fill-purple-600' : ''}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
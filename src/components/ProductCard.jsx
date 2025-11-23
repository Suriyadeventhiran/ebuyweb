import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, addToCart, toggleWishlist, wishlist, viewProduct, showCategory = false }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
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
                    <Heart
                        size={18}
                        className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                    />
                </button>
                {showCategory && (
                    <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3
                    className="font-semibold text-lg mb-2 cursor-pointer hover:text-purple-600"
                    onClick={() => viewProduct(product)}
                >
                    {product.name}
                </h3>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-2">({product.stock} in stock)</span>
                </div>
                <p className="text-2xl font-bold text-purple-600 mb-3">${product.price}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
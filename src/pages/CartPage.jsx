import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const CartPage = ({
    cart,
    updateQuantity,
    removeFromCart,
    setCurrentPage,
    subtotal,
    shipping,
    tax,
    total
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-xl p-16 text-center">
                        <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
                        <button
                            onClick={() => setCurrentPage('products')}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="bg-white rounded-xl shadow-md p-6 flex gap-6 hover:shadow-lg transition">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                        <p className="text-gray-600 mb-3">{item.category}</p>
                                        <p className="text-2xl font-bold text-purple-600 mb-4">${item.price}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 bg-white rounded hover:bg-gray-200 transition"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="w-10 text-center font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 bg-white rounded hover:bg-gray-200 transition"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal:</span>
                                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping:</span>
                                        <span className="font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (10%):</span>
                                        <span className="font-semibold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-4 flex justify-between text-xl font-bold">
                                        <span>Total:</span>
                                        <span className="text-purple-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                {subtotal < 100 && (
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-sm text-blue-700">
                                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                                    </div>
                                )}
                                <button
                                    onClick={() => alert('Checkout functionality coming soon!')}
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition font-semibold text-lg shadow-lg"
                                >
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={() => setCurrentPage('products')}
                                    className="w-full mt-3 border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition font-semibold"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
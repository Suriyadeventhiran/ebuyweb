import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import ShoppingCart from "../node_modules/lucide-react/dist/esm/icons/shopping-cart.js";
import Minus from "../node_modules/lucide-react/dist/esm/icons/minus.js";
import Plus from "../node_modules/lucide-react/dist/esm/icons/plus.js";
import Trash2 from "../node_modules/lucide-react/dist/esm/icons/trash-2.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-8 text-gray-800", children: "Shopping Cart" }),
    cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 80, className: "mx-auto text-gray-300 mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-600 mb-4", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrentPage("products"),
          className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition",
          children: "Continue Shopping"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-4", children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 flex gap-6 hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.image,
            alt: item.name,
            className: "w-32 h-32 object-cover rounded-lg"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-3", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-purple-600 mb-4", children: [
            "$",
            item.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-gray-100 rounded-lg p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => updateQuantity(item.id, -1),
                  className: "p-1 bg-white rounded hover:bg-gray-200 transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center font-semibold", children: item.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => updateQuantity(item.id, 1),
                  className: "p-1 bg-white rounded hover:bg-gray-200 transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => removeFromCart(item.id),
                className: "p-2 text-red-500 hover:bg-red-50 rounded-lg transition",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-gray-800", children: [
          "$",
          (item.price * item.quantity).toFixed(2)
        ] }) })
      ] }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-xl p-6 sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-800", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "$",
              subtotal.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax (10%):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "$",
              tax.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4 flex justify-between text-xl font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-600", children: [
              "$",
              total.toFixed(2)
            ] })
          ] })
        ] }),
        subtotal < 100 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-sm text-blue-700", children: [
          "Add $",
          (100 - subtotal).toFixed(2),
          " more for free shipping!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => alert("Checkout functionality coming soon!"),
            className: "w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition font-semibold text-lg shadow-lg",
            children: "Proceed to Checkout"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setCurrentPage("products"),
            className: "w-full mt-3 border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition font-semibold",
            children: "Continue Shopping"
          }
        )
      ] }) })
    ] })
  ] }) });
};
export {
  CartPage as default
};

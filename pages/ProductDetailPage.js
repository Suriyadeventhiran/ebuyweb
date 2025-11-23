import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import ChevronRight from "../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import Heart from "../node_modules/lucide-react/dist/esm/icons/heart.js";
const ProductDetailPage = ({
  product,
  setCurrentPage,
  addToCart,
  toggleWishlist,
  wishlist,
  subtotal
}) => {
  if (!product) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setCurrentPage("products"),
        className: "flex items-center text-gray-600 hover:text-purple-600 mb-6 transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "transform rotate-180" }),
          "Back to Products"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          className: "w-full h-96 object-cover rounded-xl"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-100 text-purple-600 px-4 py-1 rounded-full inline-block mb-4 font-semibold", children: product.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4 text-gray-800", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400 text-2xl", children: "★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-gray-600 ml-2", children: product.rating })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-bold text-purple-600 mb-6", children: [
          "$",
          product.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 text-lg leading-relaxed", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-700 font-semibold", children: [
            "✓ ",
            product.stock,
            " items in stock"
          ] }),
          subtotal > 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700", children: "✓ Free shipping on orders over $100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                addToCart(product);
                setCurrentPage("cart");
              },
              className: "flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition font-semibold text-lg",
              children: "Add to Cart"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleWishlist(product.id),
              className: "px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  size: 24,
                  className: wishlist.includes(product.id) ? "fill-purple-600" : ""
                }
              )
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
};
export {
  ProductDetailPage as default
};

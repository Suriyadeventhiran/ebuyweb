import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import Heart from "../node_modules/lucide-react/dist/esm/icons/heart.js";
const WishlistPage = ({
  wishlistProducts,
  setCurrentPage,
  addToCart,
  toggleWishlist,
  viewProduct
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-8 text-gray-800", children: "My Wishlist" }),
    wishlistProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 80, className: "mx-auto text-gray-300 mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-600 mb-4", children: "Your wishlist is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrentPage("products"),
          className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition",
          children: "Browse Products"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: wishlistProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "w-full h-56 object-cover cursor-pointer",
            onClick: () => viewProduct(product)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toggleWishlist(product.id),
            className: "absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: "fill-red-500 text-red-500" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-2", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-purple-600 mb-3", children: [
          "$",
          product.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addToCart(product),
            className: "w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition",
            children: "Add to Cart"
          }
        )
      ] })
    ] }, product.id)) })
  ] }) });
};
export {
  WishlistPage as default
};

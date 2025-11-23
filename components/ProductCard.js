import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import Heart from "../node_modules/lucide-react/dist/esm/icons/heart.js";
const ProductCard = ({ product, addToCart, toggleWishlist, wishlist, viewProduct, showCategory = false }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105", children: [
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
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Heart,
            {
              size: 18,
              className: wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
            }
          )
        }
      ),
      showCategory && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold", children: product.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "font-semibold text-lg mb-2 cursor-pointer hover:text-purple-600",
          onClick: () => viewProduct(product),
          children: product.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: "★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600 ml-1", children: product.rating }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-400 ml-2", children: [
          "(",
          product.stock,
          " in stock)"
        ] })
      ] }),
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
  ] });
};
export {
  ProductCard as default
};

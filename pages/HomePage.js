import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import Heart from "../node_modules/lucide-react/dist/esm/icons/heart.js";
const HomePage = ({ products, setCurrentPage, setSelectedCategory, addToCart, toggleWishlist, wishlist, viewProduct }) => {
  const categories = ["Electronics", "Accessories"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Welcome to ShopZone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90", children: "Discover amazing products at unbeatable prices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrentPage("products"),
          className: "bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition transform hover:scale-105",
          children: "Shop Now"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-800", children: "Featured Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: categories.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => {
            setSelectedCategory(category);
            setCurrentPage("products");
          },
          className: `${index === 0 ? "bg-gradient-to-br from-blue-500 to-purple-600" : "bg-gradient-to-br from-pink-500 to-orange-500"} rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition transform shadow-xl`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "opacity-90", children: [
              "Explore our ",
              category.toLowerCase(),
              " collection"
            ] })
          ]
        },
        category
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-800", children: "Featured Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: products.slice(0, 4).map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              className: "w-full h-48 object-cover cursor-pointer",
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
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-1", children: product.name }),
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
    ] })
  ] });
};
export {
  HomePage as default
};

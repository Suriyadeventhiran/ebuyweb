import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.js";
import "../_virtual/index.js";
import House from "../node_modules/lucide-react/dist/esm/icons/house.js";
import Package from "../node_modules/lucide-react/dist/esm/icons/package.js";
import User from "../node_modules/lucide-react/dist/esm/icons/user.js";
import Heart from "../node_modules/lucide-react/dist/esm/icons/heart.js";
import ShoppingCart from "../node_modules/lucide-react/dist/esm/icons/shopping-cart.js";
const Header = ({ currentPage, setCurrentPage, cart, wishlist }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          onClick: () => setCurrentPage("home"),
          className: "text-3xl font-bold cursor-pointer hover:opacity-90 transition flex items-center gap-2",
          children: [
            "🛍️ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ShopZone" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCurrentPage("home"),
            className: `px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${currentPage === "home" ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/90"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 18 }),
              "Home"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCurrentPage("products"),
            className: `px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${currentPage === "products" ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/90"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18 }),
              "Products"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2.5 hover:bg-white/20 rounded-full transition", title: "Account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setCurrentPage("wishlist"),
          className: "p-2.5 hover:bg-white/20 rounded-full transition relative",
          title: "Wishlist",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 22 }),
            wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold", children: wishlist.length })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setCurrentPage("cart"),
          className: "p-2.5 hover:bg-white/20 rounded-full transition relative",
          title: "Shopping Cart",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 22 }),
            cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold", children: cart.length })
          ]
        }
      )
    ] })
  ] }) }) });
};
export {
  Header as default
};

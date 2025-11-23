import { j as jsxRuntimeExports } from "./_virtual/jsx-runtime.js";
import { r as reactExports } from "./_virtual/index.js";
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import CartPage from "./pages/CartPage.js";
import WishlistPage from "./pages/WishlistPage.js";
import { sampleProducts } from "./data/sampleData.js";
function App() {
  const [currentPage, setCurrentPage] = reactExports.useState("home");
  const [cart, setCart] = reactExports.useState([]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error loading wishlist:", error);
      }
    }
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);
  reactExports.useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];
  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(
        (item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification(`${product.name} added to cart!`, "success");
  };
  const updateQuantity = (productId, change) => {
    const updatedCart = cart.map(
      (item) => item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ).filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.id === productId);
    setCart(cart.filter((item2) => item2.id !== productId));
    if (item) {
      showNotification(`${item.name} removed from cart`, "info");
    }
  };
  const clearCart = () => {
    setCart([]);
    showNotification("Cart cleared", "info");
  };
  const toggleWishlist = (productId) => {
    const product = sampleProducts.find((p) => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      showNotification(`${product.name} removed from wishlist`, "info");
    } else {
      setWishlist([...wishlist, productId]);
      showNotification(`${product.name} added to wishlist`, "success");
    }
  };
  const viewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product-detail");
  };
  const wishlistProducts = sampleProducts.filter((p) => wishlist.includes(p.id));
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? subtotal > 100 ? 0 : 9.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const showNotification = (message, type = "success") => {
    console.log(`[${type.toUpperCase()}] ${message}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Header,
      {
        currentPage,
        setCurrentPage,
        cart,
        wishlist
      }
    ),
    currentPage === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      HomePage,
      {
        products: sampleProducts,
        setCurrentPage,
        setSelectedCategory,
        addToCart,
        toggleWishlist,
        wishlist,
        viewProduct
      }
    ),
    currentPage === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductsPage,
      {
        products: filteredProducts,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        categories,
        addToCart,
        toggleWishlist,
        wishlist,
        viewProduct
      }
    ),
    currentPage === "product-detail" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDetailPage,
      {
        product: selectedProduct,
        setCurrentPage,
        addToCart,
        toggleWishlist,
        wishlist,
        subtotal
      }
    ),
    currentPage === "cart" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CartPage,
      {
        cart,
        updateQuantity,
        removeFromCart,
        clearCart,
        setCurrentPage,
        subtotal,
        shipping,
        tax,
        total
      }
    ),
    currentPage === "wishlist" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      WishlistPage,
      {
        wishlistProducts,
        setCurrentPage,
        addToCart,
        toggleWishlist,
        viewProduct
      }
    )
  ] });
}
export {
  App as default
};

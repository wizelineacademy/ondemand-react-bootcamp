import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Store from "./contexts/Store";

const App = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (cart, product, numItems) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    let item = [];
    if (Object.keys(product).length !== 0) {
      if (newCart.length > 0) {
        item = newCart.filter((cartItem) => cartItem.id === product.id);
      }
      if (item.length === 0) {
        const balance = Number(product.stock) - Number(numItems);
        const newProduct = { ...product, numItems: Number(numItems), balance };
        newCart.push(newProduct);
        setCart((prevCart) => newCart);
      } else {
        newCart = newCart.map((cartItem) => {
          if (cartItem.id === product.id) {
            cartItem.numItems = Number(cartItem.numItems) + Number(numItems);
            cartItem.balance =
              Number(cartItem.stock) - Number(cartItem.numItems);
          }
          return cartItem;
        });
        setCart((prevCart) => newCart);
      }
    }
  };
  const getCartItem = (cart, productId) => {
    let item = [];
    if (productId !== undefined) {
      if (cart.length > 0) {
        item = cart.filter((cartItem) => cartItem.id === productId);
      }
      return item;
    }
  };
  const getNumOfItems = (cart) => {
    let numItems = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        numItems += parseInt(item.numItems, 10);
      });
    }
    return numItems;
  };
  return (
    <Store.Provider value={{ cart, updateCart, getCartItem, getNumOfItems }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route exact path="/search" element={<ProductList />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Store.Provider>
  );
};

function NotFound() {
  return <h2>NotFound</h2>;
}
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Header from "./components/header";
import Products from "./components/products";
import Auth from "./components/auth";
import Cart from "./components/cart";

import store from "./store";

import "./App.css";
import Checkout from "./components/checkout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

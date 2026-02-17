import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/assets/Pages/Home.jsx";
import Collection from "../src/assets/Pages/Collection.jsx";
import About from "../src/assets/Pages/About.jsx";
import Contact from "../src/assets/Pages/Contact.jsx";
import Product from "../src/assets/Pages/Product.jsx";
import Cart from "../src/assets/Pages/Cart.jsx";
import Login from "../src/assets/Pages/Login.jsx";
import PlaceOrder from "../src/assets/Pages/PlaceOrder.jsx";
import Orders from "../src/assets/Pages/Orders.jsx";
import Navbar from "./assets/Components/Navbar.jsx";
import Footer from "./assets/Components/Footer.jsx";
import SearchBar from "./assets/Components/SearchBar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vm] md:px-[7vw] 1g:px-[9vm]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

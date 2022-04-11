import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";



import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Product from "./pages/Product";
import Products from "./pages/Products";



import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";


import productsState from "./stores/products/atom";
import userState from "./stores/users/atom";

function App() {

  const [products, setProducts] = useRecoilState(productsState);
  useEffect(() => {
    const products = axios
      .get("https://k4backend.osuka.dev/products")
      .then((response) => {
      
        setProducts(response.data);
      })
      
  }, []);

  const setUsers = useRecoilState(userState)[1];

  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/users").then((response) => {
      setUsers(response.data);
    });
  }, 
  [setUsers]);
 



  return (
    <>
   
    <Router>
      <Navbar />
      <Routes>

        <Route path="/"  element={<Home />} title="hej" />
        <Route path="/products" title="hej"element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      
      </Routes>
     
    </Router>
    </>
  );
}

export default App;

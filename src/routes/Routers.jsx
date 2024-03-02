import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home/Home";
import AllFoods from "../page/AllFoods/AllFoods";
import FoodsDetails from "../page/FoodsDetails/FoodsDetails";
import Cart from "../page/Cart/Cart";
import Checkout from "../page/Checkout/Checkout";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodsDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;

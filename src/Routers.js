import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Blog";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

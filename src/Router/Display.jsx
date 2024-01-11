import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Common_bar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Sign from "./Sign";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import "./CSS/Display.css";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/Sign-in" element={<Sign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

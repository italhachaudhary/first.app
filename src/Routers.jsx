import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

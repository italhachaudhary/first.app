import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import PageNotFound from "./components/pageNotFound";

export default function Routers() {
  return (
    <>
      <div className="bg-secondary py-3">
        <header className="container d-flex judtify-content-between align-items-center">
          <nav>
            <ul className="list-unstyled d-flex align-items-center mb-0 ">
              <li className="me-3">
                <Link to="/home">Home</Link>
              </li>
              <li className="me-3">
                <Link to="/about">About</Link>
              </li>
              <li className="me-3">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="me-3">
                <Link to="/students">Students</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/students/:Talha" element={<Students />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

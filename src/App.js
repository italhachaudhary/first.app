import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routers from "./Routers";

function App() {
  return (
    <>
      <div className="bg-secondary py-3">
        <header className="container d-flex judtify-content-between align-items-center">
          <a href="#"></a>
          <nav>
            <ul className="list-unstyled d-flex align-items-center mb-0 ">
              <li className="me-3">
                <Link to="/">Home</Link>
              </li>
              <li className="me-3">
                <Link to="about">About</Link>
              </li>
              <li className="me-3">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routers />
    </>
  );
}
export default App;

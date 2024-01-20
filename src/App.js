import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/State_Parameters/Home";
import Data from "./components/State_Parameters/Data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/data/:id" element={<Data/>}/>
      </Routes>   
    </BrowserRouter>
  );
}
export default App;

import { useState } from "react";
import "./App.css";
import Home from "./assets/Pages/Home/Home";
import About from "./assets/Pages/About/About";
import Contact from "./assets/Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

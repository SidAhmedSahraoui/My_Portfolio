import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// layouts
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
// components

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;

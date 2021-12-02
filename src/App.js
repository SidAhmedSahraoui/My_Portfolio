import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// layouts
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";
import Footer from "./components/layouts/Footer";

// components

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

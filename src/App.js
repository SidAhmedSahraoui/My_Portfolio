import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// layouts
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Resume from "./components/layouts/Resume";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Resume}>
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;

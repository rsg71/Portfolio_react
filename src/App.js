import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import "./App.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Router basename="/Portfolio_react">
        <Navbar />

        <Route exact path="/" component={Homepage} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

      </Router>
      <Footer />

    </div>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import "./App.css"


function App() {
  return (
   <div>
     <Router>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/portfolio" component={Portfolio} />
       <Route exact path="/contact" component={Contact} />
     </Router>
   </div>
  );
}

export default App;

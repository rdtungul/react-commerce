import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

// importing styled components
import Testing from "./testing";

function App() {
  return (
    <div>
      <h4>React Commerce</h4>
      <Testing />
    </div>
  );
}

export default App;

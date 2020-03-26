import React from "react";

import Nav from "./components/Nav";
import Register from "./components/Register";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route>
          <Register path="/register" />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;

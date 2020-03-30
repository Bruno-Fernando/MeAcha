import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Test from "./components/Nav/test";

export default function Routes() {
  return (
    <Router>
      <Switch>
         <Nav />
      </Switch>
    </Router>
  );
}

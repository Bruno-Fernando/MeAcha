import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

export default function Routes() {
  return (
    <Router>
      <Switch>
         <Nav />
      </Switch>
    </Router>
  );
}

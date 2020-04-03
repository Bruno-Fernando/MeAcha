import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Back from "./Back";

export default function MobileNav({ handleDrawerToggle }) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home handleDrawerToggle={handleDrawerToggle} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route>
        <Back />
      </Route>
    </Switch>
  );
}

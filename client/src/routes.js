import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import NewPost from "./components/NewPost";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Post from "./components/Post";

export default function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/new/post">
          <NewPost />
        </Route>

        <Route path="/profile/:id">
          <Profile />
        </Route>

        <Router path="/post/:id">
          <Post />
        </Router>

        <Route path="/" exact>
          <Feed />
        </Route>

      </Switch>
    </Router>
  );
}

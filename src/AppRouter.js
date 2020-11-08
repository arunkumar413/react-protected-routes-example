import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ProtectedPage from "./ProtectedPage";
import Home from "./Home";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/protected" component={ProtectedPage} />
      </Switch>
    </Router>
  );
}

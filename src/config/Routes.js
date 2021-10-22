import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import FrontPage from "../screen/frontPage";
import Login from "../screen/login";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

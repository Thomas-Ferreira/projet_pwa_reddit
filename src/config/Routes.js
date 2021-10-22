import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/header";
import FrontPage from "../screen/frontPage";
import Login from "../screen/login";
import PostPage from "../screen/postPage";
import GlobalStyle from "./GlobalStyle";

const Routes = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/post">
            <PostPage />
          </PrivateRoute>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
};

function PrivateRoute({ children, ...rest }) {
  const isToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Routes;

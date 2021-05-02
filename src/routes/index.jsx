import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { MainRoutes } from "./main";
import ScrollTop from "./ScrollTop";

export const history = createBrowserHistory();

class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <ScrollTop />
        <MainRoutes />
      </Router>
    );
  }
}

export default AppRoutes;

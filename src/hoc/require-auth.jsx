import React, { Component } from "react";
import { pushLogout } from "../config/constants"

const requireUnAuth = (ComposedComponent) => {
  class UnAuth extends Component {
    checkAuth = () => {
      const isLoggedIn = localStorage.getItem("__auth");
      if (!isLoggedIn) {
        pushLogout();
      }
    };

    componentDidMount() {
      this.checkAuth();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return UnAuth;
};

export default requireUnAuth;

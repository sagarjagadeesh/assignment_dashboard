import React, { Component } from "react";

const requireUnAuth = (ComposedComponent) => {
  class UnAuth extends Component {
    checkAuth = () => {
      const isLoggedIn = localStorage.getItem("__auth");

      if (isLoggedIn) {
        this.props.history.push("/dashboard");
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
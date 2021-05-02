import React, { Component } from "react";
import "./Loader.scss";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="blockingMessage">
          <img src={require('../../images/cutLogo.png')} alt="" />
          <span className="processing-msg">Processing</span> 
        </div>
      </div>
    );
  }
}

export default Loader;
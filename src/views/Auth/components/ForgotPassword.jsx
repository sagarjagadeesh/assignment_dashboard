import React, { Component } from "react";
import "./AuthStyles.scss";
import logo from "../../../images/logo3.png";
import { Form, Button } from "react-bootstrap";
import {IoIosArrowBack} from "react-icons/io";
import { history } from "../../../routes";

class ForgotPassword extends Component {

  state = {
    username: "",
  }

  render() {
    const { username } = this.state;
    let disable = username.length === 0;

    return (
      <div className="auth-container">
        <div className="opacity">
          <div className="second-container">
            <IoIosArrowBack color="var(--highlight-primary" className="back-arrow" onClick={() => history.push('/auth')}/>
            <img src={logo} alt="" style={{ height: '6rem'}}/>
            <Form.Label style={{ fontSize: '1.6rem', color: "var(--highlight-primary)", marginTop: '2rem'}}>Forgot Password</Form.Label>
            <Form.Label style={{ width: '28rem', textAlign: 'center'}}>Enter your email address below and we'll email instruction for setting a new one</Form.Label>
            <Form className="form-container">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control-lg"
                  onChange={(ev) => this.setState({ username: ev.target.value })}
                  value={username}
                />
              </Form.Group>
              <div className="btn-container">
                <Button variant="primary" type="submit" disabled={disable}>
                  Send
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;

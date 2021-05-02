import React, { Component } from "react";
import "./AuthStyles.scss";
import { Form, Button } from "react-bootstrap";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { history } from "../../../routes";
import { notify } from "../../../components/Notifier/Notifier";
import { mailData } from "../../../config/constants";

class AuthIndex extends Component {
  state = {
    username: "",
    password: "",
    passwordType: "password",
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (
      (username === "testuser@gmail.com" && password === "test@123456") ||
      (username === "testuser1@gmail.com" && password === "test1@123456") ||
      (username === "testuser2@gmail.com" && password === "test2@123456")
    ) {
      let check = localStorage.getItem("inbox");
      if (check === null) {
        localStorage.setItem("last_message_id", mailData[mailData.length - 1].id)
        localStorage.setItem("inbox", JSON.stringify(mailData));
        localStorage.setItem("outbox", JSON.stringify(mailData));
      }
      localStorage.setItem("__auth", username);
      history.push("/dashboard/technical");
      notify.success("Success", "Welcome to dashboard");
    } else {
      notify.error(
        "Sometging went wrong",
        "Please enter valid username or password"
      );
    }
  };

  render() {
    const { username, password, passwordType } = this.state;
    let disable = username.length === 0 || password.length === 0;
    return (
      <div className="auth-container">
        <div className="opacity">
          <div className="second-container">
            <Form
              className="form-container"
              onSubmit={(ev) => this.handleLogin(ev)}
            >
              <div className="main-name">Welcome</div>
              <div className="sub-main-name">Login to access dashboard</div>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="form-control-lg"
                  onChange={(ev) =>
                    this.setState({ username: ev.target.value })
                  }
                  value={username}
                  autoComplete="false"
                />
                {username.length > 0 && (
                  <VscChromeClose
                    className="form-close"
                    onClick={() => this.setState({ username: "" })}
                  />
                )}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordType}
                  placeholder="Password"
                  className="form-control-lg"
                  onChange={(ev) =>
                    this.setState({ password: ev.target.value })
                  }
                  value={password}
                />
                {password.length > 0 && (
                  <>
                    <VscChromeClose
                      className="form-close"
                      onClick={() => this.setState({ password: "" })}
                    />
                    {passwordType === "password" ? (
                      <AiOutlineEye
                        className="form-eye"
                        onClick={() => this.setState({ passwordType: "text" })}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="form-eye"
                        onClick={() =>
                          this.setState({ passwordType: "password" })
                        }
                      />
                    )}
                  </>
                )}
              </Form.Group>
              <Form.Group
                controlId="formBasicCheckbox"
                className="forgot-password-cont"
              >
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <div className="btn-container">
                <Button variant="primary" type="submit" disabled={disable}>
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthIndex;

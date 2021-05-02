import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { doLogout } from "../../config/constants";
import { history } from "../../routes";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineBell,
} from "react-icons/ai";

class Header extends React.Component {
  state = {
    curTime: "",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    const { curTime } = this.state;
    const { collapsed } = this.props;
    let userInfo = localStorage.getItem("__auth");
    let format = curTime.split(",")[1];
    let date = curTime.split(",")[0];
    let routeIndex = window.location.pathname.split("/")[1];
    return (
      <Navbar bg="light" expand="lg" style={collapsed ? { padding: '1rem 4rem 1rem 10rem'} : { padding: '1rem 4rem 1rem 23rem'}}>
        {collapsed ? (
          <AiOutlineMenuUnfold
            className="icon"
            onClick={this.props.handleMinimize}
          />
        ) : (
          <AiOutlineMenuFold
            className="icon"
            onClick={this.props.handleMinimize}
          />
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto center-nav">
            <div>
              <span className="span-1">{format} </span>{" "}
              <span className="span-2">{date}</span>
            </div>
          </Nav>
          <Nav className="">
            <AiOutlineBell className="icon alert-icon" />
          </Nav>
          <Nav>
            <FiSettings
              className={
                routeIndex === "user"
                  ? "icon settings-icon active-link"
                  : "icon settings-icon"
              }
              onClick={() => history.push("/user")}
            />
          </Nav>
          <Nav style={{ display: "flex", alignItems: "center" }}>
            <NavDropdown
              title={<CgProfile className="profile-pic" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="profile-name">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CgProfile className="profile-pic-2" />
                  <div>
                    <div>{userInfo}</div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={doLogout}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

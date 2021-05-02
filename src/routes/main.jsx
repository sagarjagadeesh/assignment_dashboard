import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthIndex from "../views/Auth/components";
import requireUnAuth from "../hoc/require-un-auth";
import requireAuth from "../hoc/require-auth";
import MailInboxDashboard from "../views/Mail/components/MailInboxDashboard";
import MailOutboxDashboard from "../views/Mail/components/MailOutboxDashboard";
import ReadMail from "../views/Mail/components/ReadMail";
import { ToastContainer, Zoom } from "react-toastify";
import Header from "../components/Header/Header";
import SideNavPage from "../components/SideNav/SideNav";
import LeftPanel from "../views/Mail/components/LeftPanel";

const UnAuthRoutes = () => (
  <Switch>
    <Route exact path="/auth" component={AuthIndex} />
    <Redirect from="/" to="/auth" />
    <Redirect to="/404" />
  </Switch>
);

class AuthRoutes extends Component {
  state = {
    collapsed: true,
  };

  handleMinimize = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    let user = localStorage.getItem("__auth");
    let item = localStorage.getItem("inbox");
    let inbox = JSON.parse(item);
    let inboxNotReadCount = inbox?.filter((d) => d.receiverEmail === user || d.cc === user).filter((d) => !d.read).length;
    return (
      <>
        <Header collapsed={collapsed} handleMinimize={this.handleMinimize} />
        <div style={{ display: "flex" }}>
          <SideNavPage
            collapsed={collapsed}
            handleMinimize={this.handleMinimize}
          />
          <div
            className="main-div mail-dashboard-cont"
            style={
              !collapsed ? { marginLeft: "22rem" } : { marginLeft: "8rem" }
            }
          >
            <LeftPanel inboxNotReadCount={inboxNotReadCount}/>
            <Switch>
              <Route exact path="/dashboard/mail/inbox" component={MailInboxDashboard} />
              <Route exact path="/dashboard/mail/outbox" component={MailOutboxDashboard} />
              <Route exact path="/dashboard/mail/read" component={ReadMail} />
              <Redirect from="/dashboard" to="/dashboard/mail/inbox" />
              <Redirect to="/404" />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export const MainRoutes = () => {
  return (
    <div className="body">
      <ToastContainer
        transition={Zoom}
        position="top-right"
        autoClose={5000}
      />
      <Switch>
        <Route path="/dashboard" component={requireAuth(AuthRoutes)} />
        <Route path="/" component={requireUnAuth(UnAuthRoutes)} />
      </Switch>
    </div>
  );
};

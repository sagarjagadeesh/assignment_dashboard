import React, { Component } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { RiDashboardLine } from "react-icons/ri";
import { IoAnalyticsOutline} from "react-icons/io5";
import { IoIosAnalytics} from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiMail} from "react-icons/fi";
import { AiOutlineDashboard} from "react-icons/ai";
import {DiGoogleAnalytics} from "react-icons/di";

import "./SideNav.scss";
import { history } from "../../routes";

class SideNavPage extends Component {
  state = {
    sideNavLeft: false,
  };

  renderRoutes = (route) => {
    history.push(route);
  };

  render() {
    let routeIndex = window.location.pathname.split("/")[2];
    return (
      <ProSidebar collapsed={this.props.collapsed}>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<RiDashboardLine style={{ fontSize: "2rem" }} />}
              onClick={() => this.renderRoutes("/dashboard/technical")}
            >
              Technical Dashboard
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoAnalyticsOutline style={{ fontSize: "2rem" }} />}
            >
              Generation Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoIosAnalytics style={{ fontSize: "2rem" }} />}
            >
              PR Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<FiMail style={{ fontSize: "2rem" }} />}
              active={routeIndex === "mail"}
            >
              Mail
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<AiOutlineDashboard style={{ fontSize: "2rem" }} />}
            >
              Generation Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<DiGoogleAnalytics style={{ fontSize: "2rem" }} />}
            >
              PR Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<RiDashboardLine style={{ fontSize: "2rem" }} />}
            >
              Technical Dashboard
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoAnalyticsOutline style={{ fontSize: "2rem" }} />}
            >
              Generation Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoIosAnalytics style={{ fontSize: "2rem" }} />}
            >
              PR Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<HiOutlineDocumentReport style={{ fontSize: "2rem" }} />}
            >
              Reports
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<RiDashboardLine style={{ fontSize: "2rem" }} />}
            >
              Technical Dashboard
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoAnalyticsOutline style={{ fontSize: "2rem" }} />}
              active={routeIndex === "generation_analysis"}
            >
              Generation Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoIosAnalytics style={{ fontSize: "2rem" }} />}
            >
              PR Analysis
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<IoIosAnalytics style={{ fontSize: "2rem" }} />}
            >
              PR Analysis
            </MenuItem>
          </Menu>
          
        </SidebarContent>
      </ProSidebar>
    );
  }
}

export default SideNavPage;

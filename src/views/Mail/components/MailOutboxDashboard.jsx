import React, { Component } from "react";
import { FormControl, Table } from "react-bootstrap";
import "./MailDashboard.scss";
import { FiRefreshCcw, FiEye } from "react-icons/fi";
import {
  FaExclamation,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import { history } from "../../../routes";

class DashboardMailOutbox extends Component {
  state = {
    selectedMails: [],
    allMails: [],
  };

  componentDidMount() {
    let user = localStorage.getItem("__auth");
    let item = localStorage.getItem("outbox");
    let inbox = JSON.parse(item);
    let filterData = inbox?.filter((d) => d.senderEmail === user);
    this.setState({
      allMails: filterData,
    });
  }

  handleRefresh = () => {
    let user = localStorage.getItem("__auth");
    let item = localStorage.getItem("outbox");
    let inbox = JSON.parse(item);
    let filterData = inbox?.filter((d) => d.senderEmail === user);
    this.setState({
      allMails: filterData,
    });
  }
  
  handleSelect = (ev, id) => {
    ev.stopPropagation();
    const { selectedMails } = this.state;
    if (selectedMails.indexOf(id) === -1) {
      this.setState({
        selectedMails: selectedMails.concat([id]),
      });
    } else {
      this.setState({
        selectedMails: selectedMails.filter((d) => d !== id),
      });
    }
  };

  handleDelete = () => {
    confirmAlert({
      title: "Delete Mails",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteMails(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  deleteMails = () => {
    const { selectedMails } = this.state;
    let user = localStorage.getItem("__auth");
    let item = localStorage.getItem("outbox");
    let inbox = JSON.parse(item);
    debugger
    let filterData = inbox.filter((d) => {
      if (selectedMails.indexOf(d.id) > -1) {
        return null;
      } else return d;
    });
    localStorage.setItem("outbox", JSON.stringify(filterData));
    this.setState({
      allMails: filterData.filter((d) => d.senderEmail === user),
    });
  };

  handleReadMessage = (data) => {
    localStorage.setItem("message_to_be_read", JSON.stringify(data));
    history.push("/dashboard/mail/read");
  };

  render() {
    const { selectedMails, allMails } = this.state;
    return (
      <div className="right-box">
        <div className="main-heading-cont">
          <div className="name">Outbox</div>
          <FormControl type="text" placeholder="Search..." />
        </div>
        <div className="main-heading-cont-second">
          <div className="cont-1">
            <div className="boxes" onClick={this.handleRefresh}>
              <FiRefreshCcw className="icons" />
              Refresh
            </div>
            <div className="boxes">
              <FiEye />
            </div>
            <div className="boxes">
              <FaExclamation />
            </div>
            <div
              className="boxes"
              onClick={() => selectedMails.length > 0 && this.handleDelete()}
            >
              <RiDeleteBin6Line />
            </div>
          </div>
          <div className="cont-1">
            <div className="boxes boxes-2">
              <FaLongArrowAltLeft className="icons2" />
            </div>
            <div className="boxes boxes-2">
              <FaLongArrowAltRight className="icons2" />
            </div>
          </div>
        </div>
        <div className="fixTableHead">
          <Table hover>
            <tbody>
              {allMails
                .sort((a, b) => b.id - a.id)
                .map((d) => (
                  <tr
                    className={
                      selectedMails.indexOf(d.id) > -1 ? "active-tr" : ""
                    }
                    onClick={() => this.handleReadMessage(d)}
                  >
                    <td>
                      <input
                        type="checkbox"
                        onChange={(ev) => this.handleSelect(ev, d.id)}
                        value={selectedMails.indexOf(d.id) > -1 ? true : false}
                        onClick={(ev) => ev.stopPropagation()}
                      />
                    </td>
                    <td>To - {d.receiverName}</td>
                    <td>{d.message}</td>
                    <td>{new Date(d.time).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DashboardMailOutbox;
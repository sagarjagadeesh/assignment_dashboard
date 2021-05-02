import React, { Component } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./ReadMail.scss";
import { history } from "../../../routes";

class ReadMail extends Component {
  render() {
    let item = localStorage.getItem("message_to_be_read");
    let inbox = JSON.parse(item);
    return (
      <div className="right-box">
        <div className="main-heading-cont">
          <div className="name">
            <div className="back-cont" onClick={() => history.goBack()}>
              <BiArrowBack />
            </div>
            {inbox.subject}
          </div>
        </div>
        <div className="second-cont">
          <span>from : {inbox.senderName}</span>
          <span>{new Date(inbox.time).toLocaleString()}</span>
        </div>
        <div className="message-block">
          {inbox.message}
        </div>
      </div>
    );
  }
}

export default ReadMail;

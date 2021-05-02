import React, { useState } from "react";
import "./MailDashboard.scss";
import { Button, FormControl } from "react-bootstrap";
import { BsInboxFill, BsTag } from "react-icons/bs";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdSend } from "react-icons/md";
import { history } from "../../../routes";
import { today } from "../../../config/constants";
import { notify } from "../../../components/Notifier/Notifier";

const LeftPanel = ({ inboxNotReadCount }) => {
  const [openComposeMail, setOpenComposeMail] = useState(false);
  const [receipentName, setReceipentName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const disable =
    receipentName.length === 0 || subject.length === 0 || message.length === 0;

  const sendMail = () => {
    let user = localStorage.getItem("__auth");
    if (user !== receipentName) {
      if (
        receipentName === "testuser@gmail.com" ||
        receipentName === "testuser1@gmail.com"
      ) {
        let item = localStorage.getItem("outbox");
        let last_message_id = localStorage.getItem("last_message_id");
        let inbox = JSON.parse(item);
        let payload = {
          message: message,
          senderName: user === "testuser@gmail.com" ? "Sagar" : "Anna Smith",
          senderEmail: user,
          receiverName: user === "testuser@gmail.com" ? "Anna Smith" : "Sagar",
          receiverEmail: receipentName,
          read: false,
          time: today,
          id: parseInt(last_message_id) + 1,
          subject: subject,
        };
        let filterData = inbox.concat([payload]);
        localStorage.setItem("outbox", JSON.stringify(filterData));
        localStorage.setItem("inbox", JSON.stringify(filterData));
        localStorage.setItem("last_message_id", parseInt(last_message_id) + 1);
        notify.success("Success", "Mail Sent Successfully");
        setOpenComposeMail(!openComposeMail);
        setReceipentName("");
        setSubject("");
        setMessage("");
      } else {
        notify.error(
          "Something went wrong",
          "Requested action not taken: mailbox unavailable"
        );
      }
    } else {
      notify.error(
        "Something went wrong",
        "Sender Address Rejected: logged in with same email."
      );
    }
  };

  return (
    <div className="left-box">
      <Button
        className="compose-mail-btn"
        onClick={() => setOpenComposeMail(!openComposeMail)}
      >
        Compose Mail
      </Button>
      <div className="folder-cont">
        <div className="folder-main-category-name">Folders</div>
        <div className="sub-category-cont">
          <div className="sub-category-name">
            <div>
              <BsInboxFill className="category-icons" />
              <span onClick={() => history.push("/dashboard/mail/inbox")}>
                Inbox
              </span>
            </div>
            {inboxNotReadCount !== 0 && (
              <span className="count count-1">{inboxNotReadCount}</span>
            )}
          </div>
          <div className="sub-category-name">
            <div>
              <MdSend className="category-icons" />
              <span onClick={() => history.push("/dashboard/mail/outbox")}>
                Sent
              </span>
            </div>
          </div>
          <div className="sub-category-name">
            <div>
              <AiFillStar className="category-icons" />
              <span>Important</span>
            </div>
            <span className="count count-2">5</span>
          </div>
          <div className="sub-category-name">
            <div>
              <RiDraftLine className="category-icons" />
              <span>Drafts</span>
            </div>
            <span className="count count-3">2</span>
          </div>
          <div className="sub-category-name">
            <div>
              <BiTrash className="category-icons" />
              <span>Trash</span>
            </div>
          </div>
        </div>
      </div>

      <div className="folder-cont">
        <div className="folder-main-category-name">Categories</div>
        <div className="sub-category-cont">
          <div className="sub-category-name sub-category-name-2">
            <div>
              <GoPrimitiveDot className="category-icons-2 color-1" />
              <span>Work</span>
            </div>
          </div>
          <div className="sub-category-name sub-category-name-2">
            <div>
              <GoPrimitiveDot className="category-icons-2 color-2" />
              <span>Document</span>
            </div>
          </div>
          <div className="sub-category-name sub-category-name-2">
            <div>
              <GoPrimitiveDot className="category-icons-2 color-3" />
              <span>Advertising</span>
            </div>
          </div>
          <div className="sub-category-name sub-category-name-2">
            <div>
              <GoPrimitiveDot className="category-icons-2 color-1" />
              <span>Client</span>
            </div>
          </div>
          <div className="sub-category-name sub-category-name-2">
            <div>
              <GoPrimitiveDot className="category-icons-2 color-2" />
              <span>Social</span>
            </div>
          </div>
        </div>
      </div>

      <div className="folder-cont">
        <div className="folder-main-category-name">Labels</div>
        <div className="labels-cont">
          <div className="labels">
            <BsTag />
            <span>Family</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Work</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Home</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Children</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Holidays</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Music</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Photography</span>
          </div>
          <div className="labels">
            <BsTag />
            <span>Film</span>
          </div>
        </div>
      </div>

      {openComposeMail && (
        <div className="compose-mail-cont">
          <div className="compose-header">
            <span>New message</span>
            <AiOutlineClose
              onClick={() => setOpenComposeMail(!openComposeMail)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <FormControl
              type="text"
              placeholder="Receipents Mail"
              onChange={(ev) => setReceipentName(ev.target.value)}
              value={receipentName}
            />
          </div>
          <div>
            <FormControl
              type="text"
              placeholder="Subject"
              onChange={(ev) => setSubject(ev.target.value)}
              value={subject}
            />
          </div>
          <textarea
            placeholder="Message"
            onChange={(ev) => setMessage(ev.target.value)}
            value={message}
          />
          <div>
            <Button disabled={disable} onClick={() => sendMail()}>
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;

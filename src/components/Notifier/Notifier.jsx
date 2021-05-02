import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../sass/components/_notifier.scss";

const toast_config = {
  draggable: true,
  hideProgressBar: true,
  newestOnTop: false,
};

const NotificationTemplate = (props) => {
  const { title, message, type } = props;
  return (
    <div className="notifier">
      <div className="notifier__content">
        <h5 className={`notifier__title-${type} header-7`}>{title}</h5>
        {message && <p className="notifier__sub">{message}</p>}
      </div>
    </div>
  );
};

const notifier = (title, message, type) => {
  toast(<NotificationTemplate type={type} title={title} message={message} />, {
    ...toast_config,
    type: type,
  });
};

export const notify = {
  success: (title, message) => notifier(title, message, "success"),
  error: (title, message) => notifier(title, message, "error"),
  warning: (title, message) => notifier(title, message, "warning"),
  info: (title, message) => notifier(title, message, "info"),
};

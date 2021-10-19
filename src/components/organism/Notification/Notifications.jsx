import React from "react";
import { NotificationWrapper } from "./Notifications.styles";
const Notifications = ({ type, message }) => {
  return (
    <NotificationWrapper className={`notification__container --${type}`}>
      <div className="notification__message">
        <p>{message}</p>
      </div>
    </NotificationWrapper>
  );
};

export default Notifications;

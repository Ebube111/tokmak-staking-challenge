import React from "react";
import "./topnav.css";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";

import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/tuat.png";
import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "Ebube",
  image: user_image
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = user => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        {/* <input type="text" placeholder="    connect wallet..." /> */}
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <Dropdown
            button
            badge="1"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
      </div>
    </div>
  );
};

export default Topnav;

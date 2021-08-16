import React from "react";
import "./sidebar.css";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { Link } from "react-router-dom";

const SidebarItem = props => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = props => {
  const activeItem = sidebar_items.findIndex(
    item => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">LOGO</div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import React, { useRef } from "react";
import "./dropdown.css";

import Button from "../button/Button";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", e => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      // user clicks toggle
      content_ref.current.classList.toggle("active");
    } else {
      // user clicks outside the toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = props => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {props.button ? <Button>Connect</Button> : ""}
        {props.arrow && <div className="down-arrow">{props.arrow}</div>}
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className={`dropdown__toogle-badge ${props.badge}`}></span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;

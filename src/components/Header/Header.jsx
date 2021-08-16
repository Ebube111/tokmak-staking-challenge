import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="Header">
      <h1 className="title">{props.title}</h1>
      <h4 className="subtitle">{props.subtitle}</h4>
      <div className="header_operator">
        <div className="header-left">
          <div className="dao">
            <span className="dot2"></span>
            <h4>DAO Candidate</h4>
          </div>
          <div className="operator">
            <span className="dot"></span>
            <h4>Operator</h4>
          </div>
        </div>
        <div className="inbetween"></div>
        <div className="header-right">
          <div className="stake">
            <i className="bx bx-plus i"></i>
            <h4>Stake</h4>
          </div>
          <div className="unstake">
            <i className="bx bx-minus i2"></i>
            <h4>Unstake</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

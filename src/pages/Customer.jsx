import React from "react";

import "./styles/customer.css";

import Card from "../components/card/Card";
import Header from "../components/Header/Header";

const Customer = () => {
  return (
    <div>
      <Header
        title="Select Your Operator"
        subtitle="select an operator to stake, unstake, or withdraw your tokens"
      />
      <div className="card-container">
        <div className="card-bar">
          <Card name="Level 19" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="Tokamak1" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="DSRV" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="staked" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="decipher" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="Talken" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="DeSpread" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card name="DXM Corp" token="0" textNumber="Available in wallet" />
        </div>
        <div className="card-bar">
          <Card
            name="Danal Fintech"
            token="0"
            textNumber="Available in wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;

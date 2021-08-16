import React, { useState } from "react";
import "./card.css";

import { ReactComponent as ArrowIcon } from "../../assets/down.svg";
import Modal from "../modal/Modal";
import Button from "../button/Button";

const Card = props => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.name}
        footer={
          <div>
            <Button inverse>View All Transactions</Button>

            <Button onClick={closeModalHandler}>CLOSE</Button>
          </div>
        }
      >
        <div className="row">
          <div className="col-6">
            <h3>Calculator</h3>
            <h3>Liquidity</h3>
            <h3>Total Delegates</h3>
            <h3>Commit Counts</h3>
            <h3>Recent Commits</h3>
          </div>
          <div className="col-6">
            <h3>0x</h3>
            <h3>931,980.99 TON</h3>
            <h3>37</h3>
            <h3>33</h3>
            <h3>2021.07.20 06:55:46 (+01:00)</h3>
          </div>
        </div>
      </Modal>
      <div className="main-card">
        <div className="card-header">
          <div>
            <span className="opr">OPR</span>
          </div>
          <div>
            <h2 className="tokamak">{props.name}</h2>
          </div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot2"></span>
          </div>
        </div>
        <div>
          <div className="class-footer">
            <div className="plus">
              <Button disabled danger reverse>
                +
              </Button>
            </div>
            <div className="minus">
              <Button disabled danger reverse>
                -
              </Button>
            </div>
            <div className="connect">
              <Button inverse className="connect-b">
                Connect
              </Button>
              <div className="down-arrow">
                <a onClick={openModalHandler} href="#" className="down-arrow">
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

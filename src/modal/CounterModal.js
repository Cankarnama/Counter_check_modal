import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CounterCheq from "../countercheqrequisite/CounterCheq";
import Navbar from "../Navbar/Navbar";
import Body from "../body/Body";

function CounterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>

      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          {/* <div className="w-100"> */}
          <div style={{ width: "100%" }}>
            <Navbar />
            <Body />
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CounterModal;

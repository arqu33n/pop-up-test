import React from "react";
import Form from "./Form";
import "./modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <Form />
      </div>
    </div>
  );
};
export default Modal;

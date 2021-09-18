import React from "react";
import { Link } from "react-router-dom"
import "../styles/components/modal.scss"

function Modal({ setOpenModal, setService }) {
  const services = [
      {
          name: "Eyebrow",

      }, 
      {
          name: "Waxing",

      }, 
      {
          name: "Vagacial",

      }, 
      {
          name: "Lashes",
      }, 
      {
          name: "Skin Treatments",

      }, 
    ]

const handleService = (service) => {
  setService(service)
  setOpenModal(false)
} 

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <Link to="/calendar">
            <button onClick={() => handleService("Eyebrow")}>Eyebrow</button>
          </Link> 
          <Link to="/calendar">
            <button onClick={() => handleService("Waxing")}>Waxing</button>
          </Link> 
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
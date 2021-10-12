import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/components/modal.scss"

function Modal({ setModalOpen }) {

  const [service, setService] = useState([])  
  
  const services = [
      {
          name: "Makeup",
          path: "/make-up"
      }, 
      {
          name: "Waxing",
          path: "/waxing"

      }, 
      {
          name: "Vagacial",
          path: "/vagacial"

      }, 
      {
          name: "Lashes",
          path: "/lashes"
      }, 
      {
          name: "Facials",
          path: "/facials"

      }, 
      {
          name: "Brows",
          path: "/eyebrow"
      }, 
  ]

  console.log("whatever")
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          > 
            X
          </button>
        </div>
        <div className="title">
          <h2>Pick a service to schedule your appointment</h2>
          <hr />
          <div className="link-container">
            {services.map(service => (
              <Link to={service.path ? service.path : "/"}>
                <button className="service-button" onClick={() => setModalOpen(false)}>{service.name}</button>
              </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
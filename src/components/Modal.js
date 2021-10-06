import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/components/modal.scss"

function Modal({ setOpenModal }) {

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
          <h2>Pick a service to schedule your appointment</h2>
          <hr />
          <div className="link-container">
            {services.map(service => (
              <Link to={service.path ? service.path : "/"}>
                <button className="service-button" onClick={() => handleService("Makeup")}>{service.name}</button>
              </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
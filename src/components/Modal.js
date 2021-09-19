import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/components/modal.scss"

function Modal({ setOpenModal }) {

  const [service, setService] = useState([])  
  
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
          <h2>Services</h2>
          <hr />
          <div className="link-container">
            <Link to="/make-up">
              <button className="service-button" onClick={() => handleService("Makeup")}>Makeup</button>
            </Link> 
            <Link to="/calendar">
              <button className="service-button" onClick={() => handleService("Waxing")}>Waxing</button>
            </Link> 
			<Link to="/calendar">
              <button className="service-button" onClick={() => handleService("Waxing")}>Waxing</button>
            </Link> 
			<Link to="/calendar">
              <button className="service-button" onClick={() => handleService("Waxing")}>Waxing</button>
            </Link> 
			<Link to="/calendar">
              <button className="service-button" onClick={() => handleService("Waxing")}>Waxing</button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
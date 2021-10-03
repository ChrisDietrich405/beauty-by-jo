import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/components/modal.scss"

function Modal({ setOpenModal }) {

  const [service, setService] = useState([])  
  
  const services = [
      {
          name: "Makeup",

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
          name: "Skin",

      }, 
      {
          name: "Eyebrow",
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
              <Link to="/make-up">
                <button className="service-button" onClick={() => handleService("Makeup")}>{service.name}</button>
              </Link>
              ))}
            
            {/* <Link to="/make-up">
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
            </Link>  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
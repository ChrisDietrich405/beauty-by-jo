import { useState } from "react"
import Logo from "../assets/images/logo.jpg"

import Modal from "./Modal"
import { IoIosLogIn } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
// import DatePicker from 'react-date-picker'

export default function Header() {

    const [modalOpen, setModalOpen] = useState(false)
    const [service, setService] = useState("Choose a service")


    return (
       <>
            <div className="header">
                 <div className="header-container">
                      <button>410-292-4710</button>
                      <img src={Logo}/>
                      <button>Contact Us</button>
                 </div>
                 <div className="appointment-wrapper">
                     <button onClick={() => setModalOpen(true)}>Services</button>
                     {/* <DatePicker /> */}
                     <button onClick={() => setModalOpen(true)}>Pick a time</button>
                     <div className="submit-container">
                         <IoIosLogIn color="white" size="30"/>
                         <span>Submit</span>
                     </div>
                     <div className="login-container">
                          <BsFillPersonFill color="white" size="30"/>
                          <span>Login</span>
                     </div>
                 </div>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} setService={setService}/>}
        </> 
    )

}
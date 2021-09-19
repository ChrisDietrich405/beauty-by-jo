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
            </div>
        </> 
    )

}

import Logo from "../assets/images/logo.jpg"

import { IoIosLogIn } from "react-icons/io";

export default function Header() {
    return (
       <div className="header">
            <div className="header-container">
                 <button>410-292-4710</button>
                 <img src={Logo}/>
                 <button>Contact Us</button>
            </div>
            <div className="appointment-wrapper">
                <input type="text" placeholder="service"/>
                <input type="text" placeholder="date"/>
                <input type="text" placeholder="time"/>
                <div className="login-container">
                <IoIosLogIn/>
                    login
                </div>
            </div>
       </div>
    )
}
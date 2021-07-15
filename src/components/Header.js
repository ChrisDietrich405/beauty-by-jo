
import Logo from "../assets/images/logo.jpg"


export default function Header() {
    return (
       <div className="header-container">
            <button>443-333-3333</button>
            <img src={Logo}/>
            <button>Contact Us</button>
       </div>
    )
}

import Logo from "../assets/images/logo.jpg"


export default function Header() {
    return (
       <div className="header-container">
            <button>410-292-4710</button>
            <img src={Logo}/>
            <button>Contact Us</button>
       </div>
    )
}
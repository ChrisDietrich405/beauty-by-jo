import { Link } from "react-router-dom"


export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse alignment" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#"><div className="btn">
                            <span className="noselect">Home</span></div></Link> 
                        </li> 
                        <li className="nav-item">
                            <Link to="/make-up" className="nav-link" href="#"><div className="btn">
                            <span className="noselect">Make Up</span></div></Link> 
                        </li> 
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link" href="#"><div className="btn">
                            <span className="noselect">About Us</span></div></Link> 
                        </li> 
                        <li className="nav-item dropdown">
                            <Link to="/beauty" className="nav-link dropdown-hover btn beauty" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"> Beauty</Link>
                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">  
                                    <li>
                                    <Link to="/LawnCare" className="dropdown-item">Eyebrows and Eyelashes</Link>
                                    </li>
                                    <li>
									<hr className="dropdown-divider" />
								    </li>
                                    <li>
                                    <Link to="/PowerWashing" className="dropdown-item">Skin Treatments</Link>
                                    </li>
                                    <li>
									<hr className="dropdown-divider" />
								    </li>
                                    <li>
                                    <Link to="/SnowRemoval" className="dropdown-item">Facials</Link>
                                    </li>
                                    <li>
									<hr className="dropdown-divider" />
								    </li>
                                    <li>
                                    <Link to="/StumpRemoval" className="dropdown-item">Waxing</Link>
                                    </li>

                                </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/reviews" className="nav-link" href="#"><div className="btn">
                            <span className="noselect">Reviews</span></div></Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// import { Router, Link } from "react-router-dom"
import Logo from "../assets/images/logo.jpg"
import { AiOutlineInstagram } from "react-icons/ai"
import Instagram from "../assets/images/instagram.jpg"


export default function Footer() {
    return (
        <div className="footer-container">
            <hr />
        {/* <Router>
        <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
        </Router> */}
            <div className="footer-wrapper">
                <a href="https://www.instagram.com/beautybyjo._/" target="_blank">
                    < AiOutlineInstagram size={60} />
                    <img src={Instagram}/>
                </a>
                <div className="footer-address">
                    <p>1111 Kirk Street</p>
                    <p>Glen Burnie, MD 21060</p><br/>
                    <p>Tel: (443) 533-2222</p>
                    <p>Email: jordan@gmail.com</p>
                </div>
                <img src={Logo}/> 
            </div>
        </div>
    )
}
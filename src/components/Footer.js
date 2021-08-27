import { useState } from "react"
import Logo from "../assets/images/logo.jpg"
import { AiOutlineInstagram, AiFillPhone, AiTwotoneMail } from "react-icons/ai"
import Instagram from "../assets/images/instagram.jpg"


export default function Footer() {

    const [email, setEmail] = useState("")

    const addEmail = (e) => {
        setEmail(e.target.value)
    }

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
                    <form action="">
                        <label htmlFor="email">
                            <p>Subscribe for our newsletter</p>
                            <input type="text" name="email" placeholder="Email" value={email} onChange={addEmail} />
                        </label>
                    </form>
                    <p>< AiFillPhone size={20} />&nbsp; (410)292-4710</p>
                    <p>< AiTwotoneMail size={20} />&nbsp; beautybyjocahill@gmail.com</p>
                </div>
                <img src={Logo}/> 
            </div>
        </div>
    )
}
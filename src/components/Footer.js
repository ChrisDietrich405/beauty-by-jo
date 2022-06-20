import { useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";

import Logo from "../assets/images/logo.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="footer-container">
      <hr />
      <div className="footer-wrapper">
        <div className="footer-social-media-contact">
          <div className="footer-social-media">
            <a href="https://www.instagram.com/beautybyjo._/" target="_blank">
              <AiOutlineInstagram size={60} />
            </a>
            <a href="https://www.facebook.com/Beautyybyjo" target="_blank">
              <AiOutlineFacebook size={60} className="facebook" />
            </a>
          </div>
          <div className="footer-contact">
            <p>
              <AiFillPhone size={20} />
              &nbsp; (410)292-4710
            </p>
            <p>
              <AiTwotoneMail size={20} />
              &nbsp; beautybyjocahill@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-address">
          <form className="footer-form">
            <label htmlFor="email">
              <p>Subscribe for our newsletter</p>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button>Submit</button>
          </form>
        </div>

        <img src={Logo} className="footer-logo" />
      </div>
    </div>
  );
}

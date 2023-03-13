import { Parallax } from "react-parallax";

import "../styles/pages/about-us.scss";

import BeautySupplies from "../assets/images/logo.jpg";
import GridPic from "../assets/images/grid-pic1.jpg";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div
        style={{ backgroundImage: `url(${BeautySupplies})` }}
        className="banner-image"
      ></div>
      <h1
        style={{
          margin: "20px auto",
          width: "150px",
          textAlign: "center",
          fontSize: "27px",
          borderBottom: "1px solid lightgray",
        }}
      >
        About Us
      </h1>
      <div className="about-us-content">
        <p>
          My name is Jordan Cahill, I am a 21 year old licensed esthetician
          located in Glen Burnie, MD. I've had a love for all things beauty for
          as long as I could remember, so I absolutely knew this was the career
          path for me! My goal as your esthetician is to enhance your natural
          beauty and help empower all my clients to radiate confidence! I love
          having the ability to not only be your esthetician but also your
          friend (sometimes even your therapist) and I have been very fortunate
          in having great clientele that allow me to continue doing what I love.
          So to my future and current clients, thank you! I wouldn't be doing
          this without you all.{" "}
        </p>
      </div>
      <div className="about-us-intro">
        <div className="about-us-intro-pic-container">
          <img className="about-us-intro-pic" src={GridPic} alt="" />
        </div>
      </div>
    </div>
  );
}

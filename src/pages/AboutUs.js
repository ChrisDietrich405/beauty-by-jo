import { Parallax } from "react-parallax";

import "../styles/pages/about-us.scss";

import BeautySupplies from "../assets/images/about-us.jpg";
import GridPic from "../assets/images/grid-pic1.jpg";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>
            <b>About Us</b>
          </h1>
        </div>
      </Parallax>
      <div className="about-us-content">
        <h2>Welcome to Beauty By Jo!</h2>
        <p>
          My name is Jordan Cahill, I am a 20 year old licensed esthetician
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
        <div className="about-us-intro-text" id="movetxt">
          <h3>Come and Rejuvenate Yourself at our Salon</h3>
          <p>
            It is important that every once and a while you take time for
            yourself. We live in a fast-paced world that demands our attention
            whether it is work, family life or personal health. It can be hard
            to find the time to slow down and let yourself enjoy the moment.
            <br />
            <br />
            She Brows And Beauty LLC exists so that individuals can take a
            little time for themselves. Even just a simple styling session will
            give you an opportunity to focus on yourself for a bit.
          </p>
        </div>
        <div className="about-us-intro-pic-container">
          <img className="about-us-intro-pic" src={GridPic} alt="" />
        </div>
      </div>
    </div>
  );
}

import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"
import GridPic from "../assets/images/grid-pic1.jpg"

import Tab from "../components/Tab"

import "../styles/pages/about-us.scss"

export default function Policies() {
    return (
        <div className="about-us-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1>Policies</h1>                  
                </div>
                </Parallax>
                <div className="about-us-intro">
                    <div className="about-us-intro-text">
                        <h3>Come and Rejuvenate Yourself at our Salon</h3>
                        <p>
                        It is important that every once and a while you take time for   yourself. We live in a                    fast-paced world that   demands our attention whether it is work, family life or  personal                 health. It can be hard to find the time to  slow down and let yourself enjoy the moment.
                        <br/><br/>
                        She Brows And Beauty LLC exists so that individuals can take a little   time for                  themselves. Even just a simple styling  session will give you an opportunity to focus on                     yourself for a bit.

                        </p>
                    </div>
                    <div className="about-us-intro-pic-container">
                        <img className="about-us-intro-pic" src={GridPic} alt="" />
                    </div>
                </div>
                <Tab/>
           
        </div>
    )
}
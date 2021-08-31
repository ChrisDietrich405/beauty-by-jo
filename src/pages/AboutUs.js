import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"

import "../styles/pages/about-us.scss"

export default function AboutUs() {
    return (
        <div>
        <Parallax className="beauty-supplies-container" bgImage={BeautySupplies} strength={500}>
            <div className="beauty-supplies-container-text">{/* <div style={{ height: 400 }}> */}
                <h1>A Range of Beauty Services To Keep You Looking and Feeling Grea</h1>
                
            </div>
        </Parallax>
    </div>
    )
}
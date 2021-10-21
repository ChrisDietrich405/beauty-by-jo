import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"
import GridPic from "../assets/images/grid-pic1.jpg"

import Tab from "../components/Tab"

import "../styles/pages/reviews.scss"

export default function Testimonials() {
    return (
        <div className="about-us-container">
                <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                    <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                        <h1><b>Testimonials</b></h1>                  
                    </div>
                </Parallax>
                <Tab/>
                
           
        </div>
    )
}
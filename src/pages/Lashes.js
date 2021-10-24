import { useState } from "react"
import { Parallax, Background } from "react-parallax";

import FAQ from "../components/FAQ"
import BeautySupplies from "../assets/images/about-us.jpg"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"
import "../styles/components/parallax.scss"


export default function Lashes() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    const faqContent = [
        {
            id: 1,
            title: "What is a lash lift?",
            info: "A lash lift is a chemical process safe for the lashes and eye area which softens the keratin bonds in the hair follicle. During the service we discuss how curly you would like them and perform the service to your liking. To put it in simpler terms, this service adds a semi-permanent curl to your lashes for an effortless, bolder lash."
        },
        {   
            id: 2, 
            title: "How long does the lift last?",
            info: "Around 3-4 weeks"
        },

    ]
    
    return (
        <div className="service-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1>Lashes</h1>                  
                </div>
            </Parallax>
            <div className="price-content">
                <div className="price">
                    <div className="price-wrapper">
                        <div className="price-title">
                            <h5>Lash lift</h5>
                        </div>
                        <div className="price-cost-time">$55 45minutes (1 hr on my schedule)</div>
                        <div className="button-wrapper">
                            <button className="price-button">Book</button>
                        </div>
                    </div>
                    <div className="price-wrapper">
                        <div className="price-title">
                            <h5>Lash lift AND tint</h5>
                        </div>
                        <div className="price-cost-time">$70</div>
                        <div className="button-wrapper">
                            <button className="price-button">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ questions={faqContent}/>   
        </div>
   
    )
}

{/* <div className="service-description">
<p>What is a lash lift?</p>
<br/>
<p>A lash lift is a chemical process safe for the lashes and eye area which softens the keratin bonds in the hair follicle. During the service we discuss how curly you would like them and perform the service to your liking. To put it in simpler terms, this service adds a semi-permanent curl to your lashes for an effortless, bolder lash.</p>
<br />
<p>What is pre and post care for this service?</p>
<p>Pre</p>
<br />
<p>Come to your appointment with clean lashes. No makeup or extensions.</p>
<br />
<p>Post</p>
<p>Be gentle with your lashes; no rubbing.</p>
<p>Do not get your lashes wet for the first 24 hrs.</p>
<p>Do not use harsh products on your eyes/lashes.</p>
<p>Use of Sauna/Steam is possible after 24hrs but may weaken the effect of the lift.</p>
<p>No eye make up for 24 hours.</p>
<p>Avoid waterproof mascara’s.</p>
<p>Avoid sleeping on face</p>
<p>Do not use oil based products or any conditioning treatments/ serums on the lashes.</p>
<br />
<p>How long does the lift last?</p>
<p>Around 3-4 weeks </p>
</div> */}
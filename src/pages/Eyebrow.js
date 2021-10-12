import { useState } from "react"
import { Parallax, Background } from "react-parallax";

import EyebrowThreading from "../assets/images/eyebrow-threading2.jpg"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"
import "../styles/components/parallax.scss"


export default function Eyebrow() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    return (
        <div className="service-container">
            <Parallax className="parallax-container" bgImage={EyebrowThreading} strength={500}>
                <div className="parallax-container-text">
                    <h1><b>Eyebrows</b></h1>                  
                </div>
            </Parallax>
            
            
            <div className="price">
                <div className="price-wrapper">
                    <div className="price-title">Brow Lamination</div>
                    <div className="price-cost-time">$50: 45 minutes advertised ( 1 hour on my schedule)</div>
                    <button className="price-button">Book</button>
                </div>
                <div className="price-wrapper">
                    <div className="price-title">Brow Lamination + Wax OR Tint</div>
                    <div className="price-cost-time">$60: 55 minutes (1 hour on my schedule) </div>
                    <button className="price-button">Book</button>
                </div>
                <div className="price-wrapper">
                    <div className="price-title">Brow Lamination, Wax AND Tint</div>
                    <div className="price-cost-time">$70: 1 hour ( 1 hour 10 minutes on my schedule)</div>
                    <button className="price-button">Book</button>
                </div>
            </div>
            <h3>FAQ-</h3>
            <p><b>What is brow lamination?</b></p>
            <p>Brow Lamination is a chemical process that softens the keratin bonds and the hair follicle. This            allows me to create a new shape, playing with the brow hairs to create a thicker, and more structured       look. Whether you like them fluffy or more defined, this service is great for anyone looking to step            up their brow game. </p>

            <p><b>What would prevent me from getting this service?</b></p>
            <ul>
                <li>Pregnancy/ breast feeding</li>
                <li>Compromised skin (open, blistered, sunburnt, etc.)</li>
                <li>Microblading/microshading within the last month </li>
                <li>Laser peels, chemical peels or microdermabrasion within the last month </li>
                <li>Accutane/ Isotretinoin within the last year</li>
                <li>Dermatologists prescribed topical or oral retin-a, differin, renova, retinal, vitamin A,    benzoyl            peroxide, etc (discontinued for minimum of 2 weeks)</li>
            </ul>

            <p><b>What is pre and post care for this service? - </b></p>   
            <ul> Pre
                <li>Gently exfoliate and moisturize the brow area 24-48 hours before appointment </li>
                <li>Arrive to your service with clean brows- no brow makeup </li>
            </ul>
            <ul> Post
                <li>  Avoid getting your brows wet in any way 24 hours after the service - this means no brow makeup,             makeup remover, wipes, water, steam, facial cleansers, oils, creams, conditioning treatments, serums,           etc. </li>
                <li>Avoid sleeping on your face for 24 hours </li>
                <li> Apply castor oil nightly or another conditioning treatment to keep brows well hydrated and healthy  </li>
            </ul>
            <p><b> How long does the lamination last? - </b></p>  
            <p>     As long as you apply castor oil every night, between appointments, and are gentle with the area, this           should last 3-4 weeks</p> 
           
            {/* <div className="calendar-wrapper">
                <div className="appointment-container">
                    <h4>Choose a day and time that works for you.</h4>
                    <div className="date-picker-container">
                        <div className="date-container">
                            <DatePicker
                                onChange={() => setIsTimeVisible(true)}
                                value={value}
                            />
                        </div>
                        <div className="time-container">
                            {isTimeVisible ? 
                                timeArray.map(hour => (
                                    <div className="time-content">
                                        {hour}
                                    </div>
                                ))
                                
                            : null }
                        </div>
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}
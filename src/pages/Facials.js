import { useState } from "react"
import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"
import "../styles/components/parallax.scss"


export default function Facials() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    return (
        <div className="service-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1><b>Facials</b></h1>                  
                </div>
            </Parallax>
            <h3>Facials</h3>
            <p>-MINI MAKEOVER- $60: 45 minutes (On calendar schedule on my end it would block off an hour of time, leaving 15 minutes to clean after service)
The mini makeover is everything you need to feel refreshed and revived if 45 minutes is all your busy schedule allows. 
-SIGNATURE JO-GLOW- $80: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service)
The Signature Jo-Glow is the ultimate spa experience. It's the perfect mix of customized treatments for your personal skin care needs and goals, all white laying back and indulging in the relaxation you deserve! Great for all ages, ethnicities, and skin types. 
-THE DESIRED DETOX- $100: 1 hour 15 minutes (On calendar schedule on my end it would block off an hour and 30 minutes of time, leaving 15 minutes to clean after service)
The Desired Detox is for the skins that are clogged, congested, and in need of a little extra help! With this treatment we focus on the extracting of present acne, the healing of the skin, and the prevention of future blemishes. Great for everyone with problem areas and troubled skin, especially teens. 
-THE SENSITIVE SKIN SERENITY- $85: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service)
The Sensitive Skin Serenity is for the reactive, the rosacea, and the really sensitive skins that need extra care. This treatment will assess personal needs, whether that be anti-aging or acne all while tending to the sensitivity of the skin.
-ANTI-AGE RADIATE REJUVENATE-$85: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service)
Anti-aging Radiate Rejuvenate is a personalized service for the more mature skins that want to be revitalized, firmed, and glowy. Perfect for aging, dull skin in need of a pick me up. </p>
            <div className="calendar-wrapper">
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
        </div>
            
        </div>
    )
}
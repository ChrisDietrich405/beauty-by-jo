import { useState } from "react"
import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"



import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"
import "../styles/components/parallax.scss"


export default function MakeUp() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    return (
        <div className="service-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1>Makeup</h1>                  
                </div>
            </Parallax>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>Since 2017 I’ve been a certified and fully-insured makeup artist, helping women all across Maryland look and feel more beautiful. However, my love of beauty treatments started much, much earlier. In fact, my parents remember catching me trying to apply a full face of glam at age three.</p>
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
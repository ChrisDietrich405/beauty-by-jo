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
                    <h1>Eyebrow</h1>                  
                </div>
            </Parallax>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>Eyebrow threading is an ancient method of shaping your eyebrow it is done with the help of thread so that there is no harm to your skin . It provides you clean shape and gentle skin & well defined edges which frame the eyes.</p>
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
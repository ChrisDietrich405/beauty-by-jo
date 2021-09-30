import { useState } from "react"

import Tab from "../components/Tab"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"


export default function MakeUp() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    return (
        <div className="service-container">
            <h2>Make Up</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis, voluptas facilis voluptatum est   soluta inventore nemo accusamus quod necessitatibus adipisci blanditiis nulla iure pariatur qui labore    explicabo perspiciatis harum, consequuntur tempore alias maxime deleniti aliquid? Ullam, excepturi     quisquam!</p>
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
            <Tab/>
        </div>
    )
}
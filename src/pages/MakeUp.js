import { useState } from "react"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"


export default function MakeUp() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["1:00", "3:00", "5:00", "7:00", "9:00", "11:00"]

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
        </div>
    )
}
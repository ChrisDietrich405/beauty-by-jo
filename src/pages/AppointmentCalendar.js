import { useState } from "react"

import DatePicker from "react-date-picker"

export default function AppointmentCalendar() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, setValue] = useState(new Date())
    
    const timeArray = ["1:00", "3:00", "5:00", "7:00", "9:00", "11:00"]
  
	return (
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
					{isTimeVisible
						? timeArray.map((hour) => (
								<div className="time-content">{hour}</div>
						  ))
						: null}
				</div>
			</div>
		</div>
	);
}

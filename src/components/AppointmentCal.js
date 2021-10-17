import { useState } from "react"

import DatePicker from "react-date-picker"

export default function AppointmentCal() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, setValue] = useState(new Date())
  
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

				{/* <div className="time-container">
					{isTimeVisible
						? timeArray.map((hour) => (
								<div className="time-content">{hour}</div>
						  ))
						: null}
				</div> */}
			</div>
		</div>
	);
}
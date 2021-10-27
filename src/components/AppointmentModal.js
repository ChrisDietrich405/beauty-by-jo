import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import Datetime from 'react-datetime'

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";

import "../styles/components/modal.scss";

function AppointmentModal({ label, onClose }) {
	const [showPreconfirmation, setShowPreconfirmation] = useState(false)
	const [service, setService] = useState([]);
	const [showServices, setShowServices] = useState(true);
	const [showAppointmentCal, setShowAppointmentCal] = useState(false);
	const [showTimes, setShowTimes] = useState(false);
	const [selectedService, setSelectedService] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");
	const [showAppointmentConfirmation, setShowAppointmentConfirmation] =
		useState(false);

	const datePicker = () => {
		return (
			<div className="appointment-container">
				<h4>Choose a day and time that works for you.</h4>
				<div className="date-picker-container">
					<div className="date-container">
						<Datetime value={selectedDate} onChange={(date) => setSelectedDate(date)}/>
					</div>
				</div>
				<button onClick={() => {toggleState("preconfirmation")}}>Confirm Appointment</button>
			</div>
		);
	};

	const preConfirmation = () => {
		return (
			<>
			<h1>We're almost there!</h1>
			<p>Your {selectedService} is set for {selectedDate.toLocaleDateString("en-US")} at {selectedTime}</p>
			<button onClick={() => {toggleState("confirmation")}}>confirm</button>
			{/* <button onClick={() => toggleState("appointmentConfirmation")}>Confirm Appointment</button> */}
			</>
		)
	}

	const appointmentConfirmation = () => {
		return (
			<>
				<h1>Thank you for your business!</h1>
				<p>
					Your {selectedService} appointment has been scheduled for{" "}
					{selectedDate.toLocaleDateString("en-US")} at {selectedTime}
				</p>
				<button onClick={() => toggleState("additionalAppointment")}>
					Make another appointment
				</button>
			</>
		);
	};

	const toggleState = (state) => {
		if (state === "appointment") {
			setShowAppointmentCal(true);
			setShowServices(false);
		} else if (state === "preconfirmation") {
			setShowAppointmentCal(false);
			setShowServices(false);
			setShowPreconfirmation(true)
		} else if (state === "confirmation") {
			setShowPreconfirmation(false)
			setShowAppointmentCal(false)
			setShowAppointmentConfirmation(true);
		} else if (state === "additionalAppointment") {
			setShowPreconfirmation(false)
			setShowAppointmentConfirmation(false);
			setShowServices(true);
		}
	};

	return (
		<ModalTemplate onClose={onClose}>
			{showServices ? (
				<ServicesList
					label={label}
					onSelect={(service) => {
						setService(service.name);
						toggleState("appointment");
					}}
				/>
			) : null}
			{showAppointmentCal ? datePicker() : null}
			{showPreconfirmation ? preConfirmation(): null}
			{showAppointmentConfirmation ? appointmentConfirmation() : null}
		</ModalTemplate>
	);
}

export default AppointmentModal;

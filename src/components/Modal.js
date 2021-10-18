import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";

import ModalTemplate from "./ModalTemplate";

import "../styles/components/modal.scss";

function Modal({ onClose }) {
	const [service, setService] = useState([]);
	const [showServices, setShowServices] = useState(true);
	const [showAppointmentCal, setShowAppointmentCal] = useState(false);
	const [showTimes, setShowTimes] = useState(false);
	const [selectedService, setSelectedService] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");
	const [showAppointmentConfirmation, setShowAppointmentConfirmation] =
		useState(false);

	const services = [
		{
			name: "Makeup",
			path: "/make-up",
		},
		{
			name: "Waxing",
			path: "/waxing",
		},
		{
			name: "Vagacial",
			path: "/vagacial",
		},
		{
			name: "Lashes",
			path: "/lashes",
		},
		{
			name: "Facials",
			path: "/facials",
		},
		{
			name: "Brows",
			path: "/eyebrow",
		},
	];

	const timeArray = [
		"9:00",
		"10:00",
		"11:00",
		"1:00",
		"2:00",
		"3:00",
		"4:00",
		"5:00",
	];

	const servicesList = () => {
		return (
			<div className="title">
				<h2>Pick a service to schedule your appointment</h2>
				<hr />
				<div className="link-container">
					{services.map((service) => (
						<button
							className="service-button"
							onClick={() => {
								toggleState("appointment");
								setSelectedService(service.name);
							}}
						>
							{service.name}
						</button>
					))}
				</div>
			</div>
		);
	};

	const datePicker = () => {
		return (
			<div className="appointment-container">
				<h4>Choose a day and time that works for you.</h4>
				<div className="date-picker-container">
					<div className="date-container">
						<DatePicker
							onChange={(date) => {
								toggleState("times");
								setSelectedDate(date);
							}}
							value={selectedDate}
						/>
					</div>
				</div>
			</div>
		);
	};

	const timePicker = () => {
		return (
			<div className="time-container">
				{timeArray.map((hour) => (
					<div
						className="time-content"
						onClick={() => {
							setSelectedTime(hour);
							toggleState("confirmation");
						}}
					>
						{hour}
					</div>
				))}
			</div>
		);
	};

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
		} else if (state === "times") {
			setShowTimes(true);
			setShowAppointmentCal(false);
		} else if (state === "confirmation") {
			setShowAppointmentConfirmation(true);
			setShowTimes(false);
		} else if (state === "additionalAppointment") {
			setShowAppointmentConfirmation(false);
			setShowServices(true);
		}
	};

	return (
		<ModalTemplate onClose={onClose}>
			{showServices ? servicesList() : null}
			{showAppointmentCal ? datePicker() : null}
			{showTimes ? timePicker() : null}
			{showAppointmentConfirmation ? appointmentConfirmation() : null}
			{/* there are three results of ternary operators as children */}
		</ModalTemplate>
	);
}

export default Modal;

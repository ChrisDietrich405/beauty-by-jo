import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import Datetime from "react-datetime";

import services from "../assets/data/services";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";
import TimeList from "./TimeList";

import "../styles/components/modal.scss";

function AppointmentModal({ label, onClose }) {
	const [showServices, setShowServices] = useState(true);
	const [showSpecificServices, setShowSpecificServices] = useState(false);
	const [showAppointmentCal, setShowAppointmentCal] = useState(false);
	const [showPreconfirmation, setShowPreconfirmation] = useState(false);
	const [showAppointmentConfirmation, setShowAppointmentConfirmation] =
		useState(false);

	const [service, setService] = useState("");
	const [specificService, setSpecificService] = useState("");

	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");

	const onModalBack = () => {
		if (showServices === true) {
			setShowAppointmentConfirmation(true);
			setShowServices(false);
		} else if (showAppointmentConfirmation === true) {
			setShowPreconfirmation(true);
			setShowAppointmentConfirmation(false);
		} else if (showPreconfirmation === true) {
			setShowSpecificServices(true);
			setShowPreconfirmation(false);
		} else if (showSpecificServices === true) {
			setShowServices(true);
			setShowSpecificServices(false);
		}
	};

	const DatePicker = () => (
		<div className="appointment-container">
			<div className="modal-bod">
				<h4>Choose a day and time that works for you.</h4>
				<div className="date-picker-container">
					<div className="date-container">
						<Datetime
							timeFormat={false}
							closeOnSelect={true}
							value={selectedDate}
							onChange={(date) => setSelectedDate(date.toDate())}
						/>
						<TimeList
							onSelectTime={(timeSelected) => {
								setSelectedTime(timeSelected);
								toggleState("preconfirmation");
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);

	const preConfirmation = () => (
		<>
			<div className="modal-bod">
				<h1>We're almost there!</h1>
				<p>
					Your {specificService} appointment is set for{" "}
					{selectedDate.toLocaleDateString("en-US")} at {selectedTime}
				</p>
			</div>
			<button
				onClick={() => {
					toggleState("confirmation");
				}}
			>
				confirm
			</button>
		</>
	);

	const appointmentConfirmation = () => (
		<>
			<div className="modal-bod">
				<h1>Thank you for your business!</h1>
				<p>
					Your {specificService} appointment has been scheduled for{" "}
					{selectedDate.toLocaleDateString("en-US")} at {selectedTime}
				</p>
			</div>
			<button onClick={() => toggleState("additionalAppointment")}>
				Make another appointment
			</button>
		</>
	);

	const toggleState = (state) => {
		if (state === "services") {
			setShowSpecificServices(true);
			setShowServices(false);
		} else if (state === "appointment") {
			setShowAppointmentCal(true);
			setShowSpecificServices(false);
		} else if (state === "preconfirmation") {
			setShowAppointmentCal(false);
			setShowPreconfirmation(true);
		} else if (state === "confirmation") {
			setShowPreconfirmation(false);
			setShowAppointmentConfirmation(true);
		} else if (state === "additionalAppointment") {
			setShowAppointmentConfirmation(false);
			setShowServices(true);
		}
	};

	const getSpecificServices = () => {
		const filterServices = services.filter(
			(value) => value.name === service  
		);
		if (filterServices.length) {
			return filterServices[0].specificService;
		}
		return [];
	};
	
	return (
		<ModalTemplate onBack={onModalBack} onClose={onClose}>
			{showServices ? (
				<ServicesList
					label={label}
					services={services}
					onSelect={(service) => {
						setService(service.name);
						toggleState("services");
					}}
				/>
			) : null}
			{showSpecificServices ? (
				<ServicesList
					className="specific"
					label={label}
					services={getSpecificServices()}
					onSelect={(specificService) => {
						setSpecificService(specificService.name);
						toggleState("appointment");
					}}
				/>
			) : null}
			{showAppointmentCal && <DatePicker />}
			{showPreconfirmation ? preConfirmation() : null}
			{showAppointmentConfirmation ? appointmentConfirmation() : null}
		</ModalTemplate>
	);
}

export default AppointmentModal;

import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.jpg";

import AppointmentModal from "./AppointmentModal";

export default function Header() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="header">
				<div className="header-container">
					<button class="btn" onClick={() => setModalOpen(true)}>
						Schedule an appointment
					</button>
					<img src={Logo} />
					<Link to="/contact" className="btn">
						Contact Us
					</Link>
				</div>
				{modalOpen && <AppointmentModal label="Pick a service to schedule your appointment" onClose={() => setModalOpen(false)} />}
			</div>
		</>
	);
}

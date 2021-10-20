import { useState } from "react";

import { Link } from "react-router-dom";

import ServicesModal from "./ServicesModal";

import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse alignment"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link" href="#">
								<div className="btn">
									<span className="noselect">Home</span>
								</div>
							</Link>
						</li>
						<li className="nav-item" id="service-item">
							<button
								className="services-btn btn"
								onClick={() => setModalOpen(true)}
							>
								<span className="noselect">Services</span>
							</button>
						</li>
						<li className="nav-item">
							<Link to="/policies" className="nav-link" href="#">
								<div className="btn">
									<span className="noselect">Policies</span>
								</div>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about-us" className="nav-link" href="#">
								<div className="btn">
									<span className="noselect">About Us</span>
								</div>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/reviews" className="nav-link" href="#">
								<div className="btn">
									<span className="noselect">Reviews</span>
								</div>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signin" className="nav-link" href="#">
								<div className="btn">
									<BsFillPersonFill color="white" size="30" />
									<span className="noselect">Login</span>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{modalOpen && (
				<ServicesModal
					label="Go to page"
					onClose={() => setModalOpen(false)}
				/>
			)}
		</nav>
	);
}

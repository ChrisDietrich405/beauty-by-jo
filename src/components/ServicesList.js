export default function ServicesList({ label, onSelect }) {
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

	return (
		<div className="title">
			<h2>{label}</h2>
			<hr />
			<div className="link-container">
				{services.map((service) => (
					<button
						className="service-button"
						onClick={() => {
							onSelect(service);
							// toggleState("appointment");
							// setSelectedService(service.name);
						}}
					>
						{service.name}
					</button>
				))}
			</div>
		</div>
	);
}

import classNames from "classnames";

export default function ServicesList({ label, services, className, onSelect }) {
	console.log(services);

	return (
		<div className={classNames("title", className)}>
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

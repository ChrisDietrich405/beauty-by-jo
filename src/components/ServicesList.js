import classNames from "classnames";

export default function ServicesList({ label, services, className, onSelect }) {

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
						}}
					>
						{service.name}
					</button>
				))}
			</div>
		</div>
	);
}

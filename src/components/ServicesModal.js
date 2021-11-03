import { useHistory } from "react-router-dom";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";

import services from "../data/services";

export default function ServicesModal({ label, onClose }) {
	const history = useHistory();

	return (
		<ModalTemplate onClose={onClose}>
			<ServicesList
				services={services}
				label={label}
				onSelect={(service) => {
					history.push(service.path);
					onClose();
				}}
			/>
		</ModalTemplate>
	);
}

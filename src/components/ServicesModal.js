import { useHistory } from "react-router-dom";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";

export default function ServicesModal({ label, onClose }) {
	const history = useHistory();

	return (
		<ModalTemplate onClose={onClose}>
			<ServicesList
				label={label}
				onSelect={(service) => {
					history.push(service.path);
					onClose();
				}}
			/>
		</ModalTemplate>
	);
}

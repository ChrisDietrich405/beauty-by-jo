import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";

export default function ServicesList({ label, services, className, onSelect }) {
  const { schedule_service } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleServices = (service) => {
    onSelect(service);
    if (schedule_service === null) {
    }
    if (service.path) {
      history.push(`${service.path}`);
      console.log(service.path);
    }
  };

  return (
    <div className={classNames("title", className)}>
      <h2>{label}</h2>
      <hr />
      <div className="link-container">
        {services.map((service) => (
          <button
            key={service.id}
            className="service-button"
            onClick={() => handleServices(service)}
          >
            {service.name} &nbsp;
            {service.price}
          </button>
        ))}
      </div>
    </div>
  );
}

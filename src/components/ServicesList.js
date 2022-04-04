import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";

export default function ServicesList({ label, services, className, onSelect }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={classNames("title", className)}>
      <h2>{label}</h2>
      <hr />
      <div className="link-container">
        {services.map((service) => (
          <button
            key={service.id}
            className="service-button"
            onClick={() => {
              onSelect(service);
              dispatch(display_appointment_modal(false));
              history.push(`${service.path}`);
            }}
          >
            {service.name} &nbsp;
            {service.price}
          </button>
        ))}
      </div>
    </div>
  );
}

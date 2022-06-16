import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { display_appointment_modal } from "../store/actions/auth";

export default function ServicesList({ label, services, className, onSelect }) {
  const { type } = useSelector((state) => state.schedule.schedule);
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
              if (type === "Services") {
                dispatch(display_appointment_modal(false));
                history.push(service.path);
              }
              onSelect(service);
            }}
          >
            {service.name} &nbsp; {service.price && <span>$</span>}{" "}
            {service.price}
          </button>
        ))}
      </div>
    </div>
  );
}

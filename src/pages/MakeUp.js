import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import SpecificService from "../components/SpecificService";
import { index } from "../store/actions/service";
import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import { bookService, change, backService } from "../store/actions/schedule";

import "../styles/pages/make-up.scss";
import "../styles/components/parallax.scss";

import BeautySupplies from "../assets/images/makeup.jpg";

export default function MakeUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(display_appointment_modal(false));
    if (services.length === 0) {
      dispatch(index());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooking = (service) => {
    dispatch(backService({ back_service: false }));
    dispatch(bookService({ isBooking: true }));
    dispatch(change({ specific_service_id: 1 }));
    dispatch(change({ specific_service: service }));
    if (access_token) {
      dispatch(display_appointment_modal(true));
    } else {
      history.push("/signin");
    }
  };

  const { services } = useSelector((state) => state.service);

  const getSpecificService = (id) => {
    return (
      services.find((serviceItem) => serviceItem.id === id) || {
        specificService: [],
      }
    );
  };

  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          <h1>Makeup</h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          {getSpecificService(1).specificService?.map((service) => {
            return (
              <SpecificService
                key={service.id}
                specific_service={service}
                handleBooking={handleBooking}
              />
            );
          })}
         
        </div>
      </div>
      <div className="service-definition">
        <p>
          Prior to appointment, please send your look inspirations to{" "}
          <a className="make-up-email" href="mailto:beautybyjocahill@gmail.com">
            Beauty By Jo.
          </a>{" "}
          The price of your makeup session will have to be discussed after
          inspiration pictures are sent. Different looks require a different
          amount of time and product, therefore they will be priced accordingly.{" "}
        </p>
      </div>
    </div>
  );
}

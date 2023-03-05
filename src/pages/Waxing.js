import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import SpecificService from "../components/SpecificService";
import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import { backService, bookService, change } from "../store/actions/schedule";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

import BeautySupplies from "../assets/images/about-us.jpg";

export default function Waxing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(display_appointment_modal(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooking = (service) => {
    dispatch(backService({ back_service: false }));
    dispatch(bookService({ isBooking: true }));
    dispatch(change({ specific_service_id: 5 }));
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
          <h1>
            <b>Waxing</b>
          </h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          {getSpecificService(5).specificService?.map((service) => {
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
    </div>
  );
}

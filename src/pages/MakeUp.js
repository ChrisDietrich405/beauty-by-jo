import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax, Background } from "react-parallax";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import BeautySupplies from "../assets/images/makeup.jpg";

import DatePicker from "react-date-picker";

import "../styles/pages/make-up.scss";
import "../styles/components/parallax.scss";
import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import {
  bookService,
  specificService,
  setSpecificService,
  change,
  backService,
} from "../store/actions/schedule";

export default function MakeUp() {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const history = useHistory();

  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(display_appointment_modal(false));
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
          <div className="price-wrapper">
            <h5 className="price-title">MAKE UP CONSULTATION</h5>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $50
              </p>
              <p>
                <BiTimeFive /> 1h - 1h30min
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 1,
                    name: "make up consultation",
                    price: "50.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
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

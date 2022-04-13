import { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Parallax, Background } from "react-parallax";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import { add, change } from "../store/actions/schedule";
import {
  get,
  display_appointment_modal,
  schedule_service,
} from "../store/actions/auth";

import BeautySupplies from "../assets/images/makeup.jpg";

import "../styles/pages/make-up.scss";
import "../styles/components/parallax.scss";

function MakeUp({ access_token }) {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [value, onChange] = useState(new Date());

  const dispatch = useDispatch();

  const handleSchedule = (id) => {
    // add();
    // dispatch(display_appointment_modal(true));
    dispatch(schedule_service("schedule"));
    dispatch(change({ specific_service_id: id }));
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
              {access_token === null ? (
                <Link
                  className="price-button"
                  to={{
                    pathname: "/signin",
                    state: {
                      btSchedule: true,
                    },
                  }}
                >
                  Book
                </Link>
              ) : (
                <button
                  className="price-button"
                  onClick={() => handleSchedule(1)}
                >
                  Book
                </button>
              )}
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
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, get, display_appointment_modal }, dispatch);

const mapStateToProps = (state) => ({
  access_token: state.auth.access_token,
  show_appointment_modal: state.auth.show_appointment_modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeUp);

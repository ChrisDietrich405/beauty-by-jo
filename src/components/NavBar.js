import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import ServicesModal from "./ServicesModal";

import {
  get,
  display_appointment_modal,
  schedule_service,
} from "../store/actions/auth";

function Navbar({ show_appointment_modal, display_appointment_modal }) {
  const dispatch = useDispatch();
  const { signin_success, show_services_modal } = useSelector(
    (state) => state.auth
  );

  const handleServices = () => {
    dispatch(schedule_service(null));
    display_appointment_modal(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse alignment"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <div className="btn">
                  <span className="noselect">Home</span>
                </div>
              </Link>
            </li>

            <li className="nav-item" id="service-item">
              <button className="services-btn btn" onClick={handleServices}>
                <span className="noselect">Services</span>
              </button>
            </li>

            <li className="nav-item">
              <Link to="/policies" className="nav-link">
                <div className="btn">
                  <span className="noselect">Policies</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                <div className="btn">
                  <span className="noselect">About Us</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/testimonials" className="nav-link">
                <div className="btn">
                  <span className="noselect">Testimonials</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <div className="btn">
                  <BsFillPersonFill color="white" size="30" />
                  {signin_success ? (
                    <span className="noselect">Log Out</span>
                  ) : (
                    <span className="noselect">Log In</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {show_services_modal && (
        <ServicesModal
          label="Go to page"
          onClose={() => {
            display_appointment_modal(true);
          }}
        />
      )}
    </nav>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ display_appointment_modal }, dispatch);

const mapStateToProps = (state) => ({
  show_appointment_modal: state.auth.show_appointment_modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

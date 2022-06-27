import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import ServicesModal from "./ServicesModal";

import {
  display_appointment_modal,
  displayServiceModal,
  signout,
} from "../store/actions/auth";
import { kindService, setServiceModalType } from "../store/actions/schedule";

function Navbar({ display_appointment_modal }) {
  const { signin_success } = useSelector((state) => state.auth);
  const { show_service_modal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleServices = () => {
    dispatch(kindService({ serviceName: "Services" }));
    dispatch(setServiceModalType("Services"));
    dispatch(displayServiceModal(true));
  };

  const handleLogOut = () => {
    dispatch(signout());
  };

  useEffect(() => {}, [signin_success]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
          </ul>
          <div className="position-login">
            <Link to="/signin" className="nav-link">
              <div className="btn">
                <BsFillPersonFill color="white" size="30" />
                {signin_success ? (
                  <span className="noselect" onClick={handleLogOut}>
                    Log Out
                  </span>
                ) : (
                  <span className="noselect">Log In</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
      {show_service_modal && (
        <ServicesModal
          label="Go to page"
          onClose={() => {
            // display_appointment_modal(false);
          }}
        />
      )}
      <h1>hello</h1>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ display_appointment_modal }, dispatch);

const mapStateToProps = (state) => ({
  show_appointment_modal: state.auth.show_appointment_modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { add } from "../store/actions/schedule";
import { get, display_appointment_modal } from "../store/actions/auth";

import AppointmentModal from "./AppointmentModal";

import Logo from "../assets/images/logo.jpg";

function Header({ access_token, add, get }) {
  const { show_appointment_modal } = useSelector((state) => state.auth);

  useEffect(async () => {
    await get();
  }, []);

  const handleSchedule = () => {
    add();
    display_appointment_modal(true);
    console.log("hello");
    console.log(show_appointment_modal);
  };

  console.log(access_token);
  return (
    <>
      <div className="header">
        <div className="header-container">
          {access_token === null ? (
            <Link
              className="btn"
              to={{
                pathname: "/signin",
                state: {
                  btSchedule: true,
                },
              }}
            >
              Schedule an appointment
            </Link>
          ) : (
            <button
              // disabled={access_token === null}
              className="btn"
              onClick={handleSchedule}
            >
              Schedule an appointment
            </button>
          )}
          <Link to="/" className="logo-btn">
            <img src={Logo} />
          </Link>

          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
        {show_appointment_modal && (
          <AppointmentModal
            label="Pick a service to schedule your appointment"
            onClose={() => display_appointment_modal(false)}
          />
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, get, display_appointment_modal }, dispatch);

const mapStateToProps = (state) => ({
  access_token: state.auth.access_token,
  show_appointment_modal: state.auth.show_appointment_modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

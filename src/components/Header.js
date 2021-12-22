import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { add } from "../store/actions/schedule";

import AppointmentModal from "./AppointmentModal";

import Logo from "../assets/images/logo.jpg";

function Header({ add }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-container">
          <button
            class="btn"
            onClick={() => {
              add();
              setModalOpen(true);
            }}
          >
            Schedule an appointment
          </button>
          <Link to="/" className="logo-btn">
            <img src={Logo} />
          </Link>

          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
        {modalOpen && (
          <AppointmentModal
            label="Pick a service to schedule your appointment"
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ add }, dispatch);

export default connect(null, mapDispatchToProps)(Header);

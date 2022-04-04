import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";
import { index } from "../store/actions/service";

function ServicesModal({ label, onClose, index, services }) {
  const history = useHistory();

  useEffect(() => {
    index();
  }, []);

  return (
    <ModalTemplate onClose={onClose}>
      <ServicesList
        services={services}
        label={label}
        onSelect={(service) => {
          history.push(`${service.name}`);
          onClose();
        }}
      />
    </ModalTemplate>
  );
}

const mapStateToProps = (state) => ({
  services: state.service.services,
  errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ index }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ServicesModal);

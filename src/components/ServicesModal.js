import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";
import { index } from "../store/actions/service";
import { displayServiceModal } from "../store/actions/auth";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";

function ServicesModal({ label, onClose, index, services }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    index();
  }, []);

  return (
    <ModalTemplate onClose={onClose}>
      <ServicesList
        services={services}
        label={label}
        type="Services"
        onSelect={(service) => {
          dispatch(displayServiceModal(false));
          history.push(service.path);
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

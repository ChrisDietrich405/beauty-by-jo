import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { index } from "../store/actions/service";
import { displayServiceModal } from "../store/actions/auth";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";

function ServicesModal({ label, onClose, index, services }) {

  const history = useHistory();
  const dispatch = useDispatch();

  const { service } = useSelector((state) => state);

  useEffect(() => {
    index();
  }, [index]);

  if (service.errors) {
    return (
      <ModalTemplate onClose={onClose}>
        <p style={{ textAlign: 'center', padding: 6 }}>Something went wrong, try again in a few minutes.</p>
      </ModalTemplate>
    )
  }

  return (
    <ModalTemplate onClose={onClose}>
      <ServicesList
        services={services}
        label={label}
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
  service: state.service,
  services: state.service.services,
  errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ index }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ServicesModal);

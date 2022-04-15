import { useHistory } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';

import ServicesList from './ServicesList';
import ModalTemplate from './ModalTemplate';
import { index } from '../store/actions/service';
import { useEffect } from 'react';
import { displayServiceModal } from '../store/actions/auth';

// import services from "../assets/data/services";

function ServicesModal({ label, onClose, index, services }) {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('My modal Services', label);
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

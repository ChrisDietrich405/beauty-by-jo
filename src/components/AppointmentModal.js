import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Datetime from "react-datetime";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import { change, save } from "../store/actions/schedule";
import { index } from "../store/actions/service";
import { verifyAvailability } from "../store/actions/service";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";
import TimeList from "./TimeList";

import "../styles/components/modal.scss";

function AppointmentModal({
  label,
  onClose,
  services,
  index,
  change,
  schedule,
  save,
  availability,
  verifyAvailability,
  specific_service_id,
}) {
  const [showServices, setShowServices] = useState(true);
  const [showSpecificServices, setShowSpecificServices] = useState(false);
  const [showAppointmentCal, setShowAppointmentCal] = useState(false);
  const [showPreconfirmation, setShowPreconfirmation] = useState(false);
  const [showAppointmentConfirmation, setShowAppointmentConfirmation] =
    useState(false);

  const [service, setService] = useState("");
  const [specificService, setSpecificService] = useState("");
  const [price, setPrice] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    index();
  }, []);

  useEffect(() => {
    if (selectedDate && specific_service_id) {
      verifyAvailability({
        date: DateTime.fromJSDate(selectedDate).toFormat("yyyy-MM-dd"),
        specificServiceId: specific_service_id,
      });
    }
  }, [selectedDate, specific_service_id]);

  const onModalBack = () => {
    if (showServices === true) {
      setShowAppointmentConfirmation(true);
      setShowServices(false);
    } else if (showAppointmentConfirmation === true) {
      setShowPreconfirmation(true);
      setShowAppointmentConfirmation(false);
    } else if (showPreconfirmation === true) {
      setShowSpecificServices(true);
      setShowPreconfirmation(false);
    } else if (showSpecificServices === true) {
      setShowServices(true);
      setShowSpecificServices(false);
    } else if (showAppointmentCal === true) {
      setShowSpecificServices(true);
      setShowAppointmentCal(false);
    }
  };

  const DatePicker = () => {
    return (
      <div className="appointment-container">
        <div className="modal-bod">
          <h4>Choose a day and time that works for you.</h4>
          <div className="date-picker-container">
            <div className="date-container">
              <Datetime
                timeFormat={false}
                closeOnSelect={true}
                value={selectedDate}
                onChange={(date) => {
                  console.log(date);
                  setSelectedDate(date.toDate());
                  change({ date: date.toDate().toISOString() });
                }}
              />
              <TimeList
                availability={availability}
                onSelectTime={(timeSelected) => {
                  setSelectedTime(timeSelected);
                  toggleState("preconfirmation");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PreConfirmation = () => (
    <>
      <div className="modal-bod">
        <h4>We're almost there!</h4>
        <p>
          Your {specificService} appointment is set for{" "}
          {selectedDate.toLocaleDateString("en-US")} at {selectedTime}. The cost
          will be {price}.
        </p>
      </div>
      <button
        className="confirm-button"
        onClick={() => {
          save(schedule);
          // toggleState("confirmation");
        }}
      >
        Confirm your appointment
      </button>
    </>
  );

  const AppointmentConfirmation = () => (
    <>
      <div className="modal-bod">
        <h4>Thank you for your business!</h4>
        <p>
          Your {specificService} appointment has been scheduled for{" "}
          {selectedDate.toLocaleDateString("en-US")} at {selectedTime}. The cost
          will be {price}.
        </p>
      </div>
      <button
        className="another-appointment-button"
        onClick={() => toggleState("additionalAppointment")}
      >
        Make another appointment
      </button>
    </>
  );

  const toggleState = (state) => {
    if (state === "services") {
      setShowSpecificServices(true);
      setShowServices(false);
    } else if (state === "appointment") {
      setShowAppointmentCal(true);
      setShowSpecificServices(false);
    } else if (state === "preconfirmation") {
      setShowAppointmentCal(false);
      setShowPreconfirmation(true);
    } else if (state === "confirmation") {
      setShowPreconfirmation(false);
      setShowAppointmentConfirmation(true);
    } else if (state === "additionalAppointment") {
      setShowAppointmentConfirmation(false);
      setShowServices(true);
    }
  };

  const getSpecificServices = () => {
    // DONT UNDERSTAND
    const filterServices = services.filter((value) => value.name === service);
    if (filterServices.length) {
      return filterServices[0].specificService;
    }
    return [];
  };

  return (
    <ModalTemplate
      onBack={onModalBack}
      onClose={onClose}
      isShowBackButton={!showServices}
    >
      {showServices ? (
        <ServicesList
          label={label}
          services={services}
          onSelect={(service) => {
            setService(service.name);
            toggleState("services");
          }}
        />
      ) : null}
      {showSpecificServices ? (
        <ServicesList
          className="specific"
          label={"Now please choose a specific service"}
          services={getSpecificServices()}
          onSelect={(specificService) => {
            setSpecificService(specificService.name);
            setPrice(specificService.price);
            change({ specific_service_id: specificService.id });
            toggleState("appointment");
          }}
        />
      ) : null}
      {showAppointmentCal && <DatePicker />}
      {showPreconfirmation && <PreConfirmation />}
      {showAppointmentConfirmation && <AppointmentConfirmation />}
    </ModalTemplate>
  );
}

const mapStateToProps = (state) => ({
  services: state.service.services,
  errors: state.service.errors,
  specific_service_id: state.schedule.schedule.specific_service_id,
  schedule: state.schedule.schedule,
  availability: state.service.availability,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ index, change, save, verifyAvailability }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentModal);

//mapDispatchtoProps connects the actions to the AppointmentModel and dispatch is
// dependency

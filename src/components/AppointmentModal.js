import React, { useState, useEffect, useCallback } from "react";

import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";

import {
  change,
  save,
  backService,
  sendEmail,
} from "../store/actions/schedule";

// import { index } from "../store/actions/service";
import { verifyAvailability } from "../store/actions/service";

import ServicesList from "./ServicesList";
import ModalTemplate from "./ModalTemplate";
import TimeList from "./TimeList";

import "../styles/components/modal.scss";
import { display_appointment_modal } from "../store/actions/auth";
import { toast } from "react-toastify";
import AuthResource from "../resources/AuthResource";

const DATE_FORMAT = "yyyy-MM-dd";

function AppointmentModal({
  label,
  onClose,
  services,
  index,
  change,
  schedule,
  save,
  sendEmail,
  availability,
  verifyAvailability,
}) {
  const [showServices, setShowServices] = useState(true);
  const [showSpecificServices, setShowSpecificServices] = useState(false);
  const [showAppointmentCal, setShowAppointmentCal] = useState(false);
  const [showPreconfirmation, setShowPreconfirmation] = useState(false);
  const [showAppointmentConfirmation, setShowAppointmentConfirmation] =
    useState(false);
  const [savingAppointment, setSavingAppointment] = useState(false);

  const [service, setService] = useState("");
  const [specificService, setSpecificService] = useState("");
  const [price, setPrice] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const { serviceName, isBooking, specific_service, specific_service_id } =
    useSelector((state) => state.schedule.schedule);

  const scheduleReduxState = useSelector((state) => state.schedule);

  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

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

  const templateMessage = (serviceName, date, time, price) => {
    return (
      <>
        Your <strong> {serviceName.toLowerCase()}</strong> appointment is set
        for {DateTime.fromISO(date).toLocaleString()} at {time}.
        {typeof price == "undefined" || price == null
          ? "Please finalize pricing with Jordan. Thank you."
          : `The total cost will be ${price}. Thank you.`}
      </>
    );
  };

  const handleSave = () => {
    if (!selectedDateTime) {
      toast.error("First, select date and time.");
      return;
    }

    setSavingAppointment(true);

    const savePayload = {
      ...schedule,
      id: null,
      date: selectedDateTime,
      status: true,
    };

    save(savePayload);

    if (
      scheduleReduxState &&
      scheduleReduxState.error &&
      scheduleReduxState.error.statusCode === 400
    ) {
      toast.error(
        "Error on saving your appointment. Try again in a few minutes."
      );
      setSavingAppointment(false);
      return;
    }
    sendEmail({
      firstName: auth.user.firstName,
      lastName: auth.user.lastName,
      email: auth.user.email,
      specificService,
      selectedDate,
      selectedTime,
      price,
    });
    showCurrentModal("confirmation");
  };

  const DatePicker = () => {
    return (
      <div className="appointment-container">
        <div className="modal-body">
          <h3>{specificService}</h3>
          <h4>Choose a day and time that works for you.</h4>
          <div className="date-picker-container">
            <div className="date-container">
              <input
                className="date-input"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              {selectedDate ? (
                <TimeList
                  availability={availability}
                  onSelectTime={(dateTimeSelected) => {
                    const timeSelected =
                      DateTime.fromISO(dateTimeSelected).toFormat("h:mma");
                    setSelectedDateTime(dateTimeSelected);
                    setSelectedTime(timeSelected);
                    showCurrentModal("preconfirmation");
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PreConfirmation = () => (
    <>
      <div className="modal-body">
        <h4>We're almost there!</h4>
        {specificService === "Make up session" ? (
          <p>{templateMessage(specificService, selectedDate, selectedTime)}</p>
        ) : (
          <p>
            {templateMessage(
              specificService,
              selectedDate,
              selectedTime,
              price
            )}
          </p>
        )}
      </div>
      <button
        className="confirm-button"
        onClick={handleSave}
        disabled={savingAppointment}
      >
        Confirm your appointment
      </button>
    </>
  );

  const AppointmentConfirmation = () => (
    <>
      <div className="modal-body">
        <h4>Thank you!</h4>
        {specificService === "Make up session" ? (
          <p>
            Your <strong>{specificService.toLowerCase()}</strong> appointment
            has been scheduled for{" "}
            {DateTime.fromISO(selectedDate).toLocaleString()} at {selectedTime}.
            Please finalize pricing with Jordan.
          </p>
        ) : (
          <p>
            Your <strong>{specificService.toLowerCase()}</strong> appointment
            has been scheduled for{" "}
            {DateTime.fromISO(selectedDate).toLocaleString()} at {selectedTime}.
            The cost will be ${price}.
          </p>
        )}
      </div>
      <button
        className="another-appointment-button"
        onClick={() => showCurrentModal("additionalAppointment")}
      >
        Make another appointment
      </button>
    </>
  );

  const showCurrentModal = useCallback(
    (state) => {
      switch (state) {
        case "services":
          if (serviceName === "Services") {
            dispatch(display_appointment_modal(false));
          }
          setShowServices(false);
          setShowSpecificServices(true);
          dispatch(backService({ back_service: true }));
          break;
        case "appointment":
          if (serviceName === "Services") {
            dispatch(backService({ back_service: false }));
          }
          setSavingAppointment(false);
          setShowSpecificServices(false);
          setShowServices(false);
          setShowAppointmentCal(true);
          break;
        case "preconfirmation":
          dispatch(backService({ back_service: true }));
          setShowAppointmentCal(false);
          setShowPreconfirmation(true);
          break;
        case "confirmation":
          setShowPreconfirmation(false);
          setShowAppointmentConfirmation(true);
          setShowAppointmentCal(false);
          break;
        case "additionalAppointment":
          setShowAppointmentConfirmation(false);
          setShowServices(true);
          setShowAppointmentCal(false);
          break;
        default:
          break;
      }
    },
    [dispatch, serviceName]
  );

  const getSpecificServices = () => {
    const foundService = services.find((value) => value.name === service);
    return foundService ? foundService.specificService : [];
  };

  useEffect(() => {
    // index();
    const now = DateTime.now();
    setSelectedDate(now.toFormat(DATE_FORMAT));
  }, []);
  // }, [index]);

  useEffect(() => {
    if (isBooking) {
      setSpecificService(specific_service.name);
      setPrice(specific_service.price);
      showCurrentModal("appointment");
    }

    if (selectedDate) {
      verifyAvailability({
        id: specific_service_id,
        date: selectedDate,
      });
    }
  }, [
    selectedDate,
    isBooking,
    showCurrentModal,
    verifyAvailability,
    specific_service,
    specific_service_id,
  ]);

  return (
    <ModalTemplate
      onBack={onModalBack}
      onClose={onClose}
      isShowBackButton={true}
    >
      {showServices && (
        <ServicesList
          label={label}
          services={services}
          onSelect={(service) => {
            setService(service.name);
            showCurrentModal("services");
          }}
        />
      )}

      {showSpecificServices && (
        <ServicesList
          className="specific"
          label={`Now please choose a specific service from ${service}`}
          services={getSpecificServices()}
          onSelect={(specificService) => {
            setSpecificService(specificService.name);
            setPrice(specificService.price);
            change({ specific_service_id: specificService.id });
            showCurrentModal("appointment");
          }}
        />
      )}

      {showAppointmentCal && !showAppointmentConfirmation && <DatePicker />}
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
  bindActionCreators(
    {
      // index,
      change,
      save,
      verifyAvailability,
      sendEmail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentModal);

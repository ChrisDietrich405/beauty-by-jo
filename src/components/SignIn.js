import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";

import { signin, SIGNIN_SUCCESS, ERROR } from "../store/actions/auth";

import "../styles/components/sign-in-create-account.scss";

import { subscribe } from "../store";
import { add } from "../store/actions/schedule";

import AppointmentModal from "./AppointmentModal";
import { successToast, errorToast } from "../store/actions/toast";

function SignIn({ access_token, signin, location, successToast, errorToast }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { specific_service_id, isBooking } = useSelector(
    (state) => state.schedule.schedule
  );

  const data = useSelector((state) => state.service.services);

  const history = useHistory();

  useEffect(() => {
    const unsubscribeAuthSuccess = subscribe.on(SIGNIN_SUCCESS, () => {
      if (specific_service_id && isBooking) {
        const currentService = data.find((e) => e.id === specific_service_id);
        history.push(currentService.path);
      } else {
        successToast("You signed in successfully");
        history.push("/");
      }
      setModalOpen(false);
      // TODO: Execute Success Action, for example, show a success message and redirect to the protected page
    });

    const unsubscribeAuthError = subscribe.on(ERROR, () => {
      errorToast("Incorrect username or password entered");
      // TODO: Show error messages, example Email and/or password are invalid!
    });

    return () => {
      unsubscribeAuthSuccess();
      unsubscribeAuthError();
    };
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username.trim()) {
            errors.username = "username required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
          ) {
            errors.username = "Invalid username address";
          }
          if (!values.password.trim()) {
            errors.password = "password is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          signin(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="form-container">
            {access_token === null && (
              <p className="signin-message">
                In order to schedule an appointment please first log in.
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <h2>Log in</h2>
              <label htmlFor="username">
                username
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="username">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
              </label>
              <label htmlFor="password">
                password
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
              </label>

              <button type="submit" className="sign-in-button">
                Submit
              </button>
              <Link to="/forgot-password">
                {" "}
                <p className="forgot-password">Forgot password?</p>
              </Link>

              <p className="new-to-beauty">New to Beauty by Jo?</p>
              <Link to="/create-account" className="btn create-account-btn">
                Create your Beauty by Jo account
              </Link>
            </form>
            {modalOpen && (
              <AppointmentModal
                label="Pick a service to schedule your appointment"
                onClose={() => setModalOpen(false)}
              />
            )}
          </div>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  errors: state.auth.errors,
  access_token: state.auth.access_token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ signin, add, successToast, errorToast }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import {
  forgotPassword,
  FORGOT_PASSWORD_SUCCESS,
  ERROR,
} from "../store/actions/user";

import "../styles/components/sign-in-create-account.scss";
import "react-toastify/dist/ReactToastify.css";

import { subscribe } from "../store";

// import AppointmentModal from "./AppointmentModal";

function ForgotPassword({ forgotPassword, location }) {
  const history = useHistory();

  useEffect(() => {
    const unsubscribeAuthSuccess = subscribe.on(FORGOT_PASSWORD_SUCCESS, () => {
      toast.dark(
        "you will receive an email with details on how to reset your password",
        {
          onClose: (props) => {
            history.push("/");
          },
          autoClose: 3000,
        }
      );
      // TODO: Execute Success Action, for example, show a success message and redirect to the protected page
    });

    const unsubscribeAuthError = subscribe.on(ERROR, () => {
      toast.error("Incorrect email entered");
      // TODO: Show error messages, example Email and/or password are invalid!
    });

    return () => {
      unsubscribeAuthSuccess();
      unsubscribeAuthError();
    };
  }, []);

  return (
    <>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
      <Formik
        initialValues={{
          email: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email.trim()) {
            errors.email = "email required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          forgotPassword(values.email);
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
          /* and other goodies */
        }) => (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2>Forgot Password?</h2>
              <label htmlFor="email">
                email
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
              </label>

              <button type="submit" className="sign-in-button">
                Submit
              </button>
              <Link to="/signin">
                {" "}
                <p className="forgot-password">Login</p>
              </Link>

              <p className="new-to-beauty">New to Beauty by Jo?</p>
              <Link to="/create-account" className="btn create-account-btn">
                Create your Beauty by Jo account
              </Link>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ forgotPassword }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

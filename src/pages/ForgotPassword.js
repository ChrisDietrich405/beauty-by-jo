import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";

import {
  forgotPassword,
  FORGOT_PASSWORD_SUCCESS,
  ERROR,
} from "../store/actions/user";

import "../styles/components/sign-in-create-account-contact.scss";

import { subscribe } from "../store";
import { errorToast, successToast } from "../store/actions/toast";

function ForgotPassword({ forgotPassword, successToast, errorToast }) {

  useEffect(() => {
    const unsubscribeAuthSuccess = subscribe.on(FORGOT_PASSWORD_SUCCESS, () => {
      successToast(
        "you will receive an email with details on how to reset your password"
      );
      // TODO: Execute Success Action, for example, show a success message and redirect to the protected page
    });

    const unsubscribeAuthError = subscribe.on(ERROR, () => {
      errorToast("Incorrect email entered");
      // TODO: Show error messages, example Email and/or password are invalid!
    });

    return () => {
      unsubscribeAuthSuccess();
      unsubscribeAuthError();
    };
  }, [errorToast, successToast]);

  return (
    <>
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
  bindActionCreators({ forgotPassword, successToast, errorToast }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

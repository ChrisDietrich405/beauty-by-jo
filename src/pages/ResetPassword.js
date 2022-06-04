import "../styles/components/sign-in-create-account.scss";
import "react-toastify/dist/ReactToastify.css";

import { ErrorMessage, Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { bindActionCreators } from "redux";

import { subscribe } from "../store";
import {
  ERROR,
  RESET_PASSWORD_SUCCESS,
  resetPassword,
} from "../store/actions/user";

// import AppointmentModal from "./AppointmentModal";

function ResetPassword({ resetPassword, location }) {
  const history = useHistory();
  const { hash } = useParams();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const unsubscribeAuthSuccess = subscribe.on(RESET_PASSWORD_SUCCESS, () => {
      setSuccess(true);
      toast.dark("Your password was reseted successfully", {
        onClose: (props) => {
          history.push("/signin");
        },
        autoClose: 3000,
      });
      // TODO: Execute Success Action, for example, show a success message and redirect to the protected page
    });

    const unsubscribeAuthError = subscribe.on(ERROR, (response) => {
      setSaving(false);

      if (response && response.payload) {
        const { message, type } = response.payload;
        if (type === "expired") {
          toast.error(message, {
            onClose: (props) => {
              history.push("/forgot-password");
            },
          });
        } else {
          toast.error(message);
        }
      } else {
        toast.error("Error while resetting password");
      }
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
          password: "",
          password_confirmation: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.password?.trim()) {
            errors.password = "password required";
          }

          if (!values.password_confirmation?.trim()) {
            errors.password_confirmation = "password confirmation required";
          }

          if (Object.keys(errors).length === 0) {
            if (
              values.password.trim() !== values.password_confirmation.trim()
            ) {
              errors.password_confirmation = "password not confirmated";
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          values.hash = hash;
          setSaving(true);
          resetPassword(values);
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
              <h2>{success ? "Password reseted!" : "Forgot Password?"}</h2>
              <label
                htmlFor="password"
                style={{ display: success ? "none" : "" }}
              >
                new password
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={saving}
                />
                <ErrorMessage name="password">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
              </label>

              <label
                htmlFor="password_confirmation"
                style={{ display: success ? "none" : "" }}
              >
                confirm password
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={values.password_confirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={saving}
                />
                <ErrorMessage name="password_confirmation">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
              </label>

              <button
                type="submit"
                className="sign-in-button"
                style={{ display: success ? "none" : "" }}
              >
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
  bindActionCreators({ resetPassword }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

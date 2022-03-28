import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";

import { signin, SIGNIN_SUCCESS, ERROR } from "../store/actions/auth";

import "../styles/components/sign-in-create-account.scss";
import { useState, useEffect } from "react";
import { subscribe } from "../store";
import { add } from "../store/actions/schedule";

import AppointmentModal from "./AppointmentModal";

function SignIn({ user, signin, location, add }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribeAuthSuccess = subscribe.on(SIGNIN_SUCCESS, () => {
      alert("logged successfully");
      add();
      setModalOpen(true);

      // TODO: Execute Success Action, for example, show a success message and redirect to the protected page
    });

    const unsubscribeAuthError = subscribe.on(ERROR, () => {
      alert("you fucked up");
      // TODO: Show error messages, example Email and/or password are invalid!
    });

    return () => {
      unsubscribeAuthSuccess();
      unsubscribeAuthError();
    };
  }, []);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validate={(values) => {
        console.log("Validate", values);
        const errors = {};
        if (!values.username.trim()) {
          errors.username = "username required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
        ) {
          errors.username = "Invalid username address";
        }
        if (!values.password.trim()) {
          errors.password = "Password is required";
        }
        console.log(errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        signin(values);
        console.log(values);
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
          {location?.state?.btSchedule && (
            <p className="signin-message">
              In order to schedule an appointment please first sign in.
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
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
              <ErrorMessage name="username" />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" />
            </label>

            <button type="submit" className="sign-in-button">
              Submit
            </button>

            <p className="forgot-password">Forgot password?</p>
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
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ signin, add }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// return (
//   <div className="form-container">
//     <form onSubmit={submit}>
//       <h2>Sign In</h2>
//       <label htmlFor="name">
//         username
//         <input type="text" id="name" value={email} onChange={addEmail} />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input type="text" placeholder="" id="password" value={password} onChange={addPassword} />
//         <p className="password-minimum">(At least 6 characters)</p>
//       </label>
//       <button className="sign-in-button">Submit</button>
//       <p className="forgot-password">Forgot password?</p>
//       <p className="new-to-beauty">New to Beauty by Jo?</p>
//       <Link to="/create-account">
//         <button type="submit" className="btn create-account-btn">
//           Create your Beauty by Jo account
//         </button>
//       </Link>
//     </form>
//   </div>
// );

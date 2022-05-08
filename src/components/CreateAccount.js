import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { save } from "../store/actions/user";

import "../styles/components/sign-in-create-account.scss";
import { useEffect } from "react";

function CreateAccount({ user, save }) {
  const notify = () => toast.success("Your account has been created");
  const { user: currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (currentUser.firstName !== null) {
      notify();
      setTimeout(() => {
        history.push("/signin");
      }, 6000);
    }
  }, [currentUser]);

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName.trim()) {
            errors.firstName = "First name is required";
          }
          if (!values.lastName.trim()) {
            errors.lastName = "Last name is required";
          }
          if (!values.email.trim()) {
            errors.email = "Email required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password.trim()) {
            errors.password = "Password is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          save(values);
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
            {JSON.stringify({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            })}
            <form onSubmit={handleSubmit}>
              <h2>Create account</h2>
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="firstName" />
              </label>
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="lastName" />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email" />
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
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ save }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

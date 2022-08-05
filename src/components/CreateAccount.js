import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";

import { save } from "../store/actions/user";

import "../styles/components/sign-in-create-account-contact.scss";
import { successToast, errorToast } from "../store/actions/toast";

function CreateAccount({ save, successToast, errorToast }) {

  const history = useHistory();

  return (
    <>
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
          save(values)
          .then(res => {
            if(res) {
              successToast("Your account has been created. Now you can sign in.");
              history.push("/signin");
            } else {
              errorToast("Unable to create your account. Try again.");
            }
          })
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
                <ErrorMessage name="firstName">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
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
                <ErrorMessage name="lastName">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
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
                <ErrorMessage name="email">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
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
                <ErrorMessage name="password">
                  {(message) => <div className="error-message">{message}</div>}
                </ErrorMessage>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ save, successToast, errorToast }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
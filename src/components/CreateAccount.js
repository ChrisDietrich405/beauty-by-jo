import { useState } from "react";
import { Formik } from "formik";

import "../styles/components/sign-in-create-account.scss";

export default function CreateAccount() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			validate={(values) => {
				const errors = {};
                if(!values.firstName) {
                    errors.firstName = 'First name is required'
                }
				//   if (!values.email) {
				//     errors.email = 'Required';
				//   } else if (
				//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				//   ) {
				//     errors.email = 'Invalid email address';
				//   }
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				//   setTimeout(() => {
				//     alert(JSON.stringify(values, null, 2));
				//     setSubmitting(false);
				//   }, 400);
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
						<h4>Create account</h4>
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
						</label>

						<button type="submit" className="sign-in-button">
							Submit
						</button>
					</form>
				</div>
			)}
		</Formik>
	);
}

// <div className="form-container">
//         <form onSubmit={submit}>
//             <h4>Create account</h4>
//             <label htmlFor="name">
//                 First Name
//                 <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
//             </label>
//             <label htmlFor="name">
//                 Last Name
//                 <input type="text" id="name" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
//             </label>
//             <label htmlFor="email">
//                 Email
//                 <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
//             </label>
//             <label htmlFor="password">
//                 Password
//                 <input type="text" placeholder="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
//                 <p className="password-minimum">(At least 6 characters)</p>
//             </label>
//             <button type="submit" className="sign-in-button">Submit</button>
//         </form>
// </div>
//)

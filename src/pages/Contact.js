import { useState } from "react"

import "../styles/components/sign-in-create-account.scss"

export default function CreateAccount() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
                <form onSubmit={submit}>
                    <h3>Contact Us</h3>
                    <label htmlFor="name">
                        First Name
                        <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                    </label>
                    <label htmlFor="name">
                        Last Name
                        <input type="text" id="name" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                    <label>
                        Message
                        <textarea type="text" value={message} placeholder=" add message here" onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <button type="submit" className="sign-in-button">Submit</button> 
                </form>
            
        </div>
    )
}





// import "../styles/pages/contact.scss"

// export default function Contact() {
//     return (
//         <div className="contact-container">
//             <div>
//                 <h1>Contact us</h1>
//             </div>
//         <div>
//             <form className="form">
            
//             <div className="flex-direction">
//             <div className="first-name">

//                 <label for="firstName"></label>
//                 <input
//                 placeholder="Your First Name"
//                 type="text"
//                 name="firstName"
//                 className="firstName"
//                 tabIndex="1"
//                 />
//             </div>

//             <div>
//                 <label for="lastName"></label>
//                 <input
//                 placeholder="Your Last Name"
//                 type="text"
//                 name="lastName"
//                 className="lastName"
//                 tabIndex="2"
//                 />
//             </div>

//             <label for="email"></label>
//             <input
//             placeholder="Your Email"
//             type="email"
//             name="email"
//             id="email"
//             className="email"
//             placeholder="example@corp.com"
//             tabIndex="3"
//             />

//             <label for="message"></label>

//             <textarea
//               placeholder= "Leave Your Message"
//               className="message"
//               name="message"
//             />
//            <button type="submit" className="send">Send</button>
//            </div>
//         </form>
//     </div>
// </div>
//     )
// }
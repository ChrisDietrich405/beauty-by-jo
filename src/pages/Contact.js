import "../styles/pages/contact.scss"



export default function Contact() {
    return (
        <div className="contact-container">
            <div>
                <h1>Contact us</h1>
            </div>
        <div>
            <form className="form">
            
            <div className="flex-direction">
            <div className="first-name">

                <label for="firstName"></label>
                <input
                placeholder="Your First Name"
                type="text"
                name="firstName"
                className="firstName"
                tabIndex="1"
                />
            </div>

            <div>
                <label for="lastName"></label>
                <input
                placeholder="Your Last Name"
                type="text"
                name="lastName"
                className="lastName"
                tabIndex="2"
                />
            </div>

            <label for="email"></label>
            <input
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="example@corp.com"
            tabIndex="3"
            />

            <label for="message"></label>

            <textarea
              placeholder= "Leave Your Message"
              className="message"
              name="message"
            />
           <button type="submit" className="send">Send</button>
           </div>
        </form>
    </div>
</div>
    )
}
import "./styles.scss"

export default function Calendar() {
    return (
        <div className="calendar">
            <div className="wizard">
                <div className="header">
                    <ul className="links-container">
                        <li className="choose-appt">Choose appointment</li>
                        <li className="customer-info">Customer info</li>
                        <li className="confirmation">Confirmation</li>
                    </ul>
                    <div className="login">
                        <p>Returning?</p>
                        <p>Login</p>
                    </div>
                    <div className="services">
                        <p>Choose a category....</p>
                        <ul className="services-container">
                            <li className="eyebrow">Eyebrow</li>
                            <li className="waxing">Waxing</li>
                            <li className="vagacial">Vagacial</li>
                            <li className="lashes">Lashes</li>
                            <li className="skin treatments">Skin Treatments</li>                         
                        </ul>
                    </div>
                </div>             
            </div>
        </div>
    )
}
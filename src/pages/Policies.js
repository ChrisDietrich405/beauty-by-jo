import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"
import GridPic from "../assets/images/grid-pic1.jpg"

import Tab from "../components/Tab"

import "../styles/pages/policies.scss"

export default function Policies() {
    return (
        <div className="about-us-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1>Policies</h1>                  
                </div>
            </Parallax>
            <div className="policies-container">
                <p>I just want to thank you for booking with me!
                <br/>  
                <p>  Please Read The Following Before Booking!:</p> 
                <br />
                <p>DEPOSIT AND PAYMENT:</p>
                <p>A $20 NON-REFUNDABLE deposit is REQUIRED to book any appointment
                CASH ONLY ACCEPTED (No change provided)
                CANCELLATION POLICY AND FEES:</p>
                <br />
                <p>You will not be charged if you cancel at least 24 hours before your appointment starts. Otherwise, you will be charged 50% of the service price for late cancellations and 100% for no shows.
                When in need of rescheduling, your reschedule date must be within 14 DAYS or your deposit will be FORFEITED and you will be REQUIRED to put down a new one.
                If you are later than 10 minutes there will be a $10 late fee , if you are 15 minutes late there will be a $15 late fee , NO EXCEPTIONS! after 15 min you may be required to reschedule due to the next client.
                NO ADDITIONAL GUEST ALLOWED. you will be asked to reschedule your appointment. STRICTLY ENFORCED DUE TO COVID</p>
                <br />
                <p>No-call/no-show = no future appointments.
                Please come ready with NO mascara and NO glue or it will be an additional $15
                All fill ins booked after 3.5 weeks will be a full set.</p>
                <br />
                <p>I hope to service you soon!</p>
                <p>Feel free to contact me if you have any questions.</p>
                <p>Phone number: (410)292-4710</p>
                <p>- Jordan</p>
                <p>*WHEN PAYING A DEPOSIT YOU AGREE TO OUR POLICY*</p>
                </p>
            </div>
            <Tab/>
           
        </div>
    )
}
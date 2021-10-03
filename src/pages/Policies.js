import { Parallax, Background } from "react-parallax";

import BeautySupplies from "../assets/images/about-us.jpg"
import GridPic from "../assets/images/grid-pic1.jpg"

import Tab from "../components/Tab"

import "../styles/pages/about-us.scss"

export default function Policies() {
    return (
        <div className="about-us-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">{/* <div style={{ height: 400 }}> */}
                    <h1>Policies</h1>                  
                </div>
                </Parallax>
                <div className="about-us-intro">
                    <div className="about-us-intro-text">
                        <h3>Come and Rejuvenate Yourself at our Salon</h3>
                        <p>
                        It is important that every once and a while you take time for   yourself. We live in a                    fast-paced world that   demands our attention whether it is work, family life or  personal                 health. It can be hard to find the time to  slow down and let yourself enjoy the moment.
                        <br/><br/>
                        She Brows And Beauty LLC exists so that individuals can take a little   time for                  themselves. Even just a simple styling  session will give you an opportunity to focus on                     yourself for a bit.
                        
                        </p>

                    </div>
                    <div className="about-us-intro-pic-container">
                        <img className="about-us-intro-pic" src={GridPic} alt="" />
                    </div>
                </div>
                <div><p>I just want to thank you for booking with me!

Please Read The Following Before Booking!:


DEPOSIT AND PAYMENT:

A $20 NON-REFUNDABLE deposit is REQUIRED to book any appointment
CASH ONLY ACCEPTED (No change provided)
CANCELLATION POLICY AND FEES:

You will not be charged if you cancel at least 24 hours before your appointment starts. Otherwise, you will be charged 50% of the service price for late cancellations and 100% for no shows.
When in need of rescheduling, your reschedule date must be within 14 DAYS or your deposit will be FORFEITED and you will be REQUIRED to put down a new one.
If you are later than 10 minutes there will be a $10 late fee , if you are 15 minutes late there will be a $15 late fee , NO EXCEPTIONS! after 15 min you may be required to reschedule due to the next client.
NO ADDITIONAL GUEST ALLOWED. you will be asked to reschedule your appointment. STRICTLY ENFORCED DUE TO COVID
No-call/no-show = no future appointments.
Please come ready with NO mascara and NO glue or it will be an additional $15
All fill ins booked after 3.5 weeks will be a full set.
PARKING:

if you park across the street i can assure you that you will not get towed or get a ticket. If you park on the same side as my building your appointment must be between 9am-2pm they start giving out tickets @4pm
ENTRANCE
come to the building with the PINK DOOR and come through side there will be a black screen door, we’re the door with the HELLO doormat
I hope to service you soon!

Feel free to contact me if you have any questions.

For wax/vagacial and eyelash course inquires, after hour appointments and service questions please contact

(443) 942-7236 otherwise please book your desired service below.

If you are trying to locate my salon and need to speak to me personally contact me at:

Phone number: (443) 722-9340

- Amira

*WHEN PAYING A DEPOSIT YOU AGREE TO OUR POLICY*</p></div>
                <Tab/>
           
        </div>
    )
}
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
                <p>I just want to thank you for booking with me!</p>
                <br/>  
                <p>  Please Read The Following Before Booking!:</p> 
                <br />
                <p>DEPOSIT AND PAYMENT:</p>
                <p>-$15 non-refundable deposit through Zelle or venmo (Venmo: Jordancahillxo)</p>
                <br />
                <p>- No deposit = no appointment, once deposit is sent your appointment is official</p>
                <br />
                <p>- Day of appointment please pay remainder of balance in cash, no change please bring exact change</p>
                <br />
                <p>-If you are more than 15 minutes late you will be charged an extra $10, after 15 minutes your appointment could be cancelled due to the next client's appointment</p>
                <p>-Please understand my time is how I make my money. When late, you are taking up another appointment slot. Please arrive on time.</p>
                <p>-When in need of rescheduling, you will not be charged if you cancel 24 hours before your appointment. Anything after the 24hr window, you will be forfeiting your deposit. </p>
                <p>-No call/No show = no future appointments</p>
                <br />
                <p>OTHER</p>
                <p>-Please complete all paperwork and email it back to Beautybyjocahill@gmail.com prior to appointment </p>
                <p>-Please wear a mask</p>
                <p>-No extra guests</p>
            </div>
        </div>
    )
}
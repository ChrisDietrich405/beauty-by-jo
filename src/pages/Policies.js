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
                    <h1><b>Policies</b></h1>                  
                </div>
            </Parallax>
            <div className="policies-container">
                <h3>Please read the following before booking!</h3> 
                <br />
                <h5>DEPOSIT AND PAYMENT:</h5>
                <ul>
                    <li>$15 non-refundable deposit through Zelle or venmo (Venmo: Jordancahillxo)</li>
                    <li>No deposit = no appointment, once deposit is sent your appointment is official</li>
                    <li>Day of appointment please pay remainder of balance in cash, no change please bring exact change</li>
                    <li>If you are more than 15 minutes late you will be charged an extra $10, after 15 minutes your appointment could be cancelled due to the next client's appointment</li>
                    <li>Please understand my time is how I make my money. When late, you are taking up another appointment slot. Please arrive on time.</li>
                    <li>When in need of rescheduling, you will not be charged if you cancel 24 hours before your appointment. Anything after the 24hr window, you will be forfeiting your deposit.</li>
                    <li>No call/No show = no future appointments</li>
                </ul>
                <h5>OTHER</h5>
                <ul>
                    <li>Please complete all paperwork and email it back to Beautybyjocahill@gmail.com prior to appointment</li>
                    <li>Please wear a mask</li>
                    <li>No extra guests</li>
                </ul>

            </div>
        </div>
    )
}
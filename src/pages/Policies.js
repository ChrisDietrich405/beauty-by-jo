import { Parallax } from "react-parallax";

import "../styles/pages/policies.scss";

import BeautySupplies from "../assets/images/logo.jpg";

export default function Policies() {
  return (
    <div className="about-us-container">
      <div
        style={{ backgroundImage: `url(${BeautySupplies})` }}
        className="banner-image"
      ></div>
      <h1 style={{ marginTop: "20px", textAlign: "center" }}>Policies</h1>
      <div className="policies-container">
        <h3>Please read the following before booking!</h3>
        <br />
        <h5>DEPOSIT AND PAYMENT:</h5>
        <ul>
          <li>
            $15 non-refundable deposit through Zelle, Venmo (Venmo:
            Jordancahillxo), or Cashapp ($jcahill0422)
          </li>
          <li>
            No deposit = no appointment, once deposit is sent your appointment
            is official
          </li>
          <li>
            Day of appointment please pay remainder of balance in cash, no
            change please bring exact change
          </li>
          <li>
            If you are more than 15 minutes late you will be charged an extra
            $10, after 15 minutes your appointment could be cancelled due to the
            next client's appointment
          </li>
          <li>
            Please understand my time is how I make my money. When late, you are
            taking up another appointment slot. Please arrive on time.
          </li>
          <li>
            When in need of rescheduling, you will not be charged if you cancel
            24 hours before your appointment. Anything after the 24hr window,
            you will be forfeiting your deposit.
          </li>
          <li>No call/No show = no future appointments</li>
        </ul>
        <h5>OTHER</h5>
        <ul>
          <li>
            Please complete all paperwork and email it back to{" "}
            <a href="mailto:Beautybyjocahill@gmail.com">
              {" "}
              Beautybyjocahill@gmail.com
            </a>{" "}
            prior to appointment
          </li>
          <li>Please wear a mask</li>
          <li>No extra guests</li>
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Parallax, Background } from "react-parallax";
import DatePicker from "react-date-picker";

import BeautySupplies from "../assets/images/about-us.jpg";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "../styles/pages/services.scss";
import "../styles/pages/facials.scss";
import "../styles/components/parallax.scss";

export default function Facials() {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [value, onChange] = useState(new Date());

  const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"];

  return (
    <div className="service-container">
      <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>Facials</h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          <div className="price-wrapper">
            <div className="price-title">
              <h5>MINI MAKEOVER</h5>
              <p> The mini makeover is everything you need to feel refreshed and revived if 45 minutes is all your busy schedule allows. </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $50-$60
              </p>
              <p>
                <BiTimeFive /> 45 minutes
              </p>
            </div>

            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>SIGNATURE JO-GLOW</h5>
              <p>The Signature Jo-Glow is the ultimate spa experience. It's the perfect mix of customized treatments for your personal skin care needs and goals, all white laying back and indulging in the relaxation you deserve! Great for all ages, ethnicities, and skin types. </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $80
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>

            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>THE DESIRED DETOX</h5>
              <p>The Desired Detox is for the skins that are clogged, congested, and in need of a little extra help! With this treatment we focus on the extracting of present acne, the healing of the skin, and the prevention of future blemishes. Great for everyone with problem areas and troubled skin, especially teens. </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $100
              </p>
              <p>
                <BiTimeFive /> 1 hour 15 minutes
              </p>
            </div>

            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>THE SENSITIVE SKIN SERENITY</h5>
              <p>The Sensitive Skin Serenity is for the reactive, the rosacea, and the really sensitive skins that need extra care. This treatment will assess personal needs, whether that be anti-aging or acne all while tending to the sensitivity of the skin.</p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $85
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>

            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>ANTI-AGE RADIATE REJUVENATE</h5>
              <p>Anti-aging Radiate Rejuvenate is a personalized service for the more mature skins that want to be revitalized, firmed, and glowy. Perfect for aging, dull skin in need of a pick me up. </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $85
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>

            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="price-wrapper">
<div className="price-title">MINI MAKEOVER</div>
<div className="price-cost-time">$50:$60: 45 minutes (On calendar schedule on my end it would block off an hour of time, leaving 15 minutes to clean after service)</div>
<div className="button-wrapper">
    <button className="price-button">Book</button>
</div>
</div>
<div className="price-wrapper">
<div className="price-title">SIGNATURE JO-GLOW</div>
<div className="price-cost-time">$80: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service) </div>
<div className="button-wrapper">
    <button className="price-button">Book</button>
</div>
</div>    
<div className="price-wrapper">
<div className="price-title">THE DESIRED DETOX</div>
<div className="price-cost-time">$100: 1 hour 15 minutes (On calendar schedule on my end it would block off an hour and 30 minutes of time, leaving 15 minutes to clean after service)</div>
<div className="button-wrapper">
    <button className="price-button">Book</button>
</div>
</div>
<div className="price-wrapper">
<div className="price-title">THE SENSITIVE SKIN SERENITY</div>
<div className="price-cost-time">$85: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service)</div>
<div className="button-wrapper">
    <button className="price-button">Book</button>
</div>
</div>
<div className="price-wrapper">
<div className="price-title">ANTI-AGE RADIATE REJUVENATE</div>
<div className="price-cost-time">$85: 1 hour (On calendar schedule on my end it would block off an hour and 15 minutes of time, leaving 15 minutes to clean after service)</div>
<div className="button-wrapper">
    <button className="price-button">Book</button>
</div>
</div> */
}

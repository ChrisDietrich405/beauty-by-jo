import { useState } from "react";
import { Parallax } from "react-parallax";
import DatePicker from "react-date-picker";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

import VagacialPic from "../assets/images/vagacial.jpeg";

export default function Vagacial() {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [value, onChange] = useState(new Date());

  const timeArray = [
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
  ];

  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={VagacialPic}
        strength={500}
      >
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>
            <b>Vagacial</b>
          </h1>
        </div>
      </Parallax>
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
      <p>
        Includes skin specific masques and moisturizers to calm and protect your
        skin post wax. Anti-Inflammatory & Antibacterial Brings nourishment back
        to the skin Speeds up the healing process Hydrating, Soothing & Skin
        brightening
      </p>
      <div className="calendar-wrapper">
        <div className="appointment-container">
          <h4>Choose a day and time that works for you.</h4>
          <div className="date-picker-container">
            <div className="date-container">
              <DatePicker
                onChange={() => setIsTimeVisible(true)}
                value={value}
              />
            </div>
            <div className="time-container">
              {isTimeVisible
                ? timeArray.map((hour) => (
                    <div className="time-content">{hour}</div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

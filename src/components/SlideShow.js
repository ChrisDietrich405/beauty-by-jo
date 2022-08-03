import React from "react";

import "react-slideshow-image/dist/styles.css";

import { Fade } from "react-slideshow-image";

const AutoplayExample = () => {
  const slideImages = [
    "images/slideshow1.jpg",
    "images/slideshow2.jpg",
    "images/slideshow3.jpg",
  ];

  return (
    <div>
      <div>
        <Fade autoplay={true} arrows={false} duration={3000}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <div className="span-contain">
                <h1 className="span-text">Waxing</h1>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <div className="span-contain">
                <h1 className="span-text">Facials</h1>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <div className="span-contain">
                <h1 className="span-text">Eyebrow Maintenance</h1>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AutoplayExample;

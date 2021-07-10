import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  const slideImages = [
    'images/home1.jpg',
    'images/home3.jpg',
    'images/home6.jpg'
  ];

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px"
  }

  return (
    <div>
      <div>
        <Fade autoplay={true} arrows={false} duration={3000}>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <div className="span-container">
                    <span className="span">Waxing</span>
                </div>
            </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <div className="span-container">
                    <span className="span">Waxing</span>
                </div>
            </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
         
          </div>
        </div>
        </Fade>
      </div>

    </div>
  );
};

export default AutoplayExample;
// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import "../styles/components/slideshow.scss"

// const slideImages = [
//   'images/home1.jpg',
//   'images/home3.jpg',
//   'images/home6.jpg'
// ];

// const Slideshow = () => {
//     return (
//       <div>
//         <Slide easing="ease">
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// };

// export default Slideshow;
import { Parallax } from "react-parallax";

import TestimonialsSlideShow from "../components/TestimonialsSlideShow";

import "../styles/pages/reviews.scss";

import BeautySupplies from "../assets/images/about-us.jpg";

export default function Testimonials() {
  return (
    <div className="about-us-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>
            <b>Testimonials</b>
          </h1>
        </div>
      </Parallax>
      <TestimonialsSlideShow />
    </div>
  );
}

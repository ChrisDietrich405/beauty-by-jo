import { Parallax } from "react-parallax";

import TestimonialsSlideShow from "../components/TestimonialsSlideShow";

import "../styles/pages/reviews.scss";

import BeautySupplies from "../assets/images/logo.jpg";

export default function Testimonials() {
  return (
    <div className="about-us-container">
      <div
        style={{ backgroundImage: `url(${BeautySupplies})` }}
        className="banner-image"
      ></div>
      <h1
        style={{
          margin: "20px auto",
          width: "200px",
          textAlign: "center",
          fontSize: "27px",
          borderBottom: "1px solid lightgray",
        }}
      >
        Testimonials
      </h1>
      <TestimonialsSlideShow />
    </div>
  );
}

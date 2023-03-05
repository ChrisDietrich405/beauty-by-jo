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
      <h1 style={{ marginTop: "20px", textAlign: "center" }}>Testimonials</h1>
      <TestimonialsSlideShow />
    </div>
  );
}

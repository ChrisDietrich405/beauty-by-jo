import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import people from "../assets/data/testimonial-slideshow-data";

// import React, { Component } from "react";
// import Slider from "react-slick";

import testimonialImage1 from "../assets/images/home4.jpg";

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "../styles/components/testimonials-slideshow.scss";

const TestimonialSlideShow = () => {
  const [index, setIndex] = useState(0);
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     centerMode: true,
  //   };
  return (
    <div className="testimonials-slideshow">
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
              </article>
            );
          })}

          <div className="arrows-wrapper">
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TestimonialSlideShow;

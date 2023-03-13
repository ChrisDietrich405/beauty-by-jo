import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import people from "../assets/data/testimonial-slideshow-data";

import "../styles/components/testimonials-slideshow.scss";

const TestimonialSlideShow = () => {
  const [index, setIndex] = useState(0);

  const moveLeft = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (people.length === index + 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

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
            <button className="prev" onClick={moveLeft}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={moveRight}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TestimonialSlideShow;

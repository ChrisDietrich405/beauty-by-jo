<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "../assets/data/testimonial-slideshow-data";
=======
import React, { Component } from "react";
import Slider from "react-slick";
>>>>>>> 52dc042b4f4c0579908a63b8088de25320a6d6d8

import testimonialImage1 from "../assets/images/home4.jpg";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/components/testimonials-slideshow.scss";

const TestimonialSlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
<<<<<<< HEAD
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
=======
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
>>>>>>> 52dc042b4f4c0579908a63b8088de25320a6d6d8
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlideShow;

// import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import data from "../assets/data/testimonial-slideshow-data";

// import "../styles/components/testimonials-slideshow.scss";

// function Slideshow() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 5000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <div className="testimonials-slideshow">
//       <section className="section">
//         <div className="section-center">
//           {people.map((person, personIndex) => {
//             const { id, image, name, title, quote } = person;

//             let position = "nextSlide";
//             if (personIndex === index) {
//               position = "activeSlide";
//             }
//             if (
//               personIndex === index - 1 ||
//               (index === 0 && personIndex === people.length - 1)
//             ) {
//               position = "lastSlide";
//             }
//             <article className={position} key={id}>
//               <img src={image} alt={name} className="person-img" />
//               <h4>{name}</h4>
//               <p className="title">{title}</p>
//               <p className="text">{quote}</p>
//             </article>;
//           })}
//         </div>
//         <div className="arrows-wrapper">
//           <button className="prev" onClick={() => setIndex(index - 1)}>
//             <FiChevronLeft />
//           </button>
//           <button className="next" onClick={() => setIndex(index + 1)}>
//             <FiChevronRight />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Slideshow;

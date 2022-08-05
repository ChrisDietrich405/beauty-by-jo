import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Parallax } from "react-parallax";

import { display_appointment_modal } from "../store/actions/auth";

import SlideShow from "../components/SlideShow";
import ZoomInZoomOut from "../components/ZoomInZoomOut";

import BeautySupplies from "../assets/images/home5.jpg";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(display_appointment_modal(false));
  }, [dispatch]);

  return (
    <div className="home-container">
      <SlideShow />
      <div className="bar-separator">
        <h4>Serving the Glen Burnie and Pasadena communities</h4>
      </div>
      <div className="about-section">
        <ZoomInZoomOut className="zoom-in-zoom-out" />
        <div className="about-section-definition">
          <h3>Beauty By Jo Salon</h3>
          <hr />
          <p>
            Visit She Brows And Beauty for all of your eyebrow and eyelash
            needs. When you come to our salon in Philadelphia, we treat you with
            the same high level of care we would want to receive. Our main goal
            is for you to leave here feeling more confident with beautiful
            eyebrows and eyelashes.
          </p>
        </div>
      </div>
      <div>
        <Parallax
          className="beauty-supplies-container"
          bgImage={BeautySupplies}
          strength={500}
        >
          <div className="beauty-supplies-container-text">
            {/* <div style={{ height: 400 }}> */}
            <h1>
              A Range of Beauty Services To Keep You Looking and Feeling Great
            </h1>
            <p>
              The trained and experienced beauty experts at She Brows And Beauty
              LLC offer more than just skill and expertise. Visit our
              esthetician salon for attentive service that is customized
              according to your particular requirements. Benefit from practical
              beauty tips from our qualified estheticians. Treat yourself to top
              quality beauty products at a fully equipped esthetician salon
              offering a range of services.
            </p>
          </div>
        </Parallax>
      </div>
      <div className="grid">
        <div className="grid-item-container">
          <div className="grid-item-1 grid-item" />
          <div className="grid-item-2 grid-item" />
          <div className="grid-item-3 grid-item" />
          <div className="grid-item-4 grid-item" />
        </div>
      </div>
    </div>
  );
}

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
          <h3>Beauty By Jo</h3>
          <hr />
          <p>
            Visit Beauty by Jo for all your beauty needs! My main goal as your
            esthetician is to make those who come visit me leave feeling
            empowered in their own skin. Whether it be a simple brow wax or
            tailoring a home care regimen to work with your skin, I take pride
            in creating the most comfortable environment to allow you to enjoy
            and relax while receiving custom, luxury, treatments.
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
            <h1>Specializing in Anuel</h1>
            <p>
              Attentive and customized services including skin, brow, & lash
              treatments, as well as spray tans and make up for any event
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

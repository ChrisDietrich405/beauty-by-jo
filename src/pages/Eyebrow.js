import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import { backService, bookService, change } from "../store/actions/schedule";

import FAQ from "../components/FAQ";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

import EyebrowThreading from "../assets/images/eyebrow-threading2.jpg";

export default function Eyebrow() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(display_appointment_modal(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooking = (service) => {
    dispatch(backService({ back_service: false }));
    dispatch(bookService({ isBooking: true }));
    dispatch(change({ specific_service_id: 3 }));
    dispatch(change({ specific_service: service }));
    if (access_token) {
      dispatch(display_appointment_modal(true));
    } else {
      history.push("/signin");
    }
  };

  const questions = [
    {
      id: 1,
      title: "What is Brow Lamination?",
      info: [
        "Brow Lamination is a chemical process that softens the keratin bonds and the hair follicle. This            allows me to create a new shape, playing with the brow hairs to create a thicker, and more structured       look. Whether you like them fluffy or more defined, this service is great for anyone looking to step            up their brow game.",
      ],
    },
    {
      id: 2,
      title: "How long does the lamination last?",
      info: [
        "As long as you apply castor oil every night, between appointments, and are gentle with the area, this           should last 3-4 weeks",
      ],
    },
    {
      id: 3,
      title: "What would prevent me from getting this service?",
      info: [
        "Pregnancy/ breast feeding",
        "Compromised skin (open, blistered, sunburnt, etc.)",
        "Microblading/microshading within the last month",
        "Laser peels, chemical peels or microdermabrasion within the last month",
        "Accutane/ Isotretinoin within the last year",
        "Dermatologists prescribed topical or oral retin-a, differin, renova, retinal, vitamin A,    benzoyl            peroxide, etc (discontinued for minimum of 2 weeks)",
      ],
    },
    {
      id: 4,
      title: "What is pre care for this service?",
      info: [
        "Gently exfoliate and moisturize the brow area 24-48 hours before appointment",
        "Arrive to your service with clean brows- no brow makeup ",
      ],
    },
    {
      id: 5,
      title: "What is post care for this service?",
      info: [
        " Avoid getting your brows wet in any way 24 hours after the service - this means no brow makeup,             makeup remover, wipes, water, steam, facial cleansers, oils, creams, conditioning treatments, serums,           etc. ",
        "Avoid sleeping on your face for 24 hours",
        "Apply castor oil nightly or another conditioning treatment to keep brows well hydrated and healthy ",
      ],
    },
  ];
  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={EyebrowThreading}
        strength={500}
      >
        <div className="parallax-container-text">
          <h1>
            <b>Eyebrows</b>
          </h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BROW LAMINATION</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $50
              </p>
              <p>
                <BiTimeFive /> 45 minutes
              </p>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BROW LAMI TRIO</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $70
              </p>
              <p>
                <BiTimeFive /> 1hr 15minutes
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 6,
                    name: "Brow lami trio",
                    price: "70.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BROW LAMINATION + WAX OR TINT</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $60
              </p>
              <p>
                <BiTimeFive /> 55 minutes
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 6,
                    name: "Brow lamination wax or tint",
                    price: "60.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BROW LAMINATION + WAX AND TINT</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $70
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 5,
                    name: "Brow lamination wax and tint",
                    price: "70.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="service-description">
        <FAQ questions={questions} />
      </div>
    </div>
  );
}

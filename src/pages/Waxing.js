import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import { backService, bookService, change } from "../store/actions/schedule";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

import BeautySupplies from "../assets/images/about-us.jpg";

export default function Waxing() {
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
    dispatch(change({ specific_service_id: 5 }));
    dispatch(change({ specific_service: service }));
    if (access_token) {
      dispatch(display_appointment_modal(true));
    } else {
      history.push("/signin");
    }
  };

  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          <h1>
            <b>Waxing</b>
          </h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          <div className="price-wrapper">
            <div className="price-title">
              <h5>
                New Brazilian wax client or returning client after 5+ weeks
              </h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $65
              </p>
              <p>
                <BiTimeFive /> 60min
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 7,
                    name: "New Brazilian wax client or returning client after 5+ weeks",
                    price: "65.00",
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
              <h5>Deluxe Vajacial</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $100
              </p>
              <p>
                <BiTimeFive /> 1hr 20min
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 7,
                    name: "deluxe vajacial",
                    price: "100.00",
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
              <h5>Full Leg</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $55
              </p>
              <p>
                <BiTimeFive /> 45min
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 7,
                    name: "full leg",
                    price: "55.00",
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
              <h5>Half leg (above or below the knee)</h5>{" "}
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $35
              </p>
              <p>
                <BiTimeFive /> 55min
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 8,
                    name: "half leg",
                    price: "35.00",
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
              <h5>Full arm</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $40
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 9,
                    name: "full arm",
                    price: "40.00",
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
              <h5>Half arm (above or below elbow)</h5>{" "}
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $30
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 10,
                    name: "half arm",
                    price: "30.00",
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
              <h5>Armpits</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $20
              </p>
              <p>
                <BiTimeFive /> 15m
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 11,
                    name: "armpits",
                    price: "20.00",
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
              <h5>Bikini</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $30
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 12,
                    name: "bikini",
                    price: "30.00",
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
              <h5>French bikini</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $45
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 13,
                    name: "french bikini",
                    price: "45.00",
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
              <h5>Brazilian</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $65
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 14,
                    name: "brazilian",
                    price: "65.00",
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
              <h5>Lip or chin</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $10
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 15,
                    name: "lip or chin",
                    price: "10.00",
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
              <h5>Full face(lip, chin, brows, sides)</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $40
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 16,
                    name: "full face",
                    price: "40.00",
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
              <h5>Eyebrow shaping</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $15
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 17,
                    name: "eyebrow shaping",
                    price: "15.00",
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
    </div>
  );
}

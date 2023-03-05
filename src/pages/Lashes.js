import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import SpecificService from "../components/SpecificService";

import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import {
  backService,
  bookService,
  change,
} from "../store/actions/schedule";

import FAQ from "../components/FAQ";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

import BeautySupplies from "../assets/images/about-us.jpg";

export default function Lashes() {

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
    dispatch(change({ specific_service_id: 4 }));
    dispatch(change({ specific_service: service }));
    if (access_token) {
      dispatch(display_appointment_modal(true));
    } else {
      history.push("/signin");
    }
  };

  const faqContent = [
    {
      id: 1,
      title: "What is a lash lift?",
      info: [
        "A lash lift is a chemical process safe for the lashes and eye area which softens the keratin bonds in the hair follicle. During the service we discuss how curly you would like them and perform the service to your liking. To put it in simpler terms, this service adds a semi-permanent curl to your lashes for an effortless, bolder lash.",
      ],
    },
    {
      id: 2,
      title: "What is pre care for this service?",
      info: [
        "Come to your appointment with clean lashes. No makeup or extensions.",
      ],
    },
    {
      id: 3,
      title: "What is post care for this service?",
      info: [
        "Be gentle with your lashes; no rubbing.",
        "Do not get your lashes wet for the first 24 hrs.",
        "Do not use harsh products on your eyes/lashes.",
        "Use of Sauna/Steam is possible after 24hrs but may weaken the effect of the lift.",
        "No eye make up for 24 hours",
        "Avoid waterproof mascara’s.",
        "Avoid sleeping on face",
        "Do not use oil based products or any conditioning treatments/ serums on the lashes.",
      ],
    },
    {
      id: 4,
      title: "How long does the lift last?",
      info: ["Around 3-4 weeks"],
    },
  ];

  const { services } = useSelector((state) => state.service);

  const getSpecificService = (id) => {
    return (
      services.find((serviceItem) => serviceItem.id === id) || {
        specificService: [],
      }
    );
  };

  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>Lashes</h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          {getSpecificService(4).specificService?.map((service) => {
            return (
              <SpecificService
                key={service.id}
                specific_service={service}
                handleBooking={handleBooking}
              />
            );
          })}
        </div>
      </div>
      <FAQ questions={faqContent} />
    </div>
  );
}

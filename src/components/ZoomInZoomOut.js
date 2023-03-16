import { useRef, useEffect } from "react";

import Eyebrow from "../assets/images/home-pic.jpg";

export default function ZoomInZoomOut() {
  const scrollTo = useRef();

  useEffect(() => {
    const eventListener = () => {
      if (window.pageYOffset >= scrollTo.current.getBoundingClientRect().y) {
        scrollTo.current.classList.add("zoom-in-out-box");
      }
    };
    window.addEventListener("scroll", eventListener);
    return () => window.removeEventListener("scroll", eventListener);
  });

  return (
    <div
      ref={scrollTo}
      style={{
        backgroundImage: "url(" + Eyebrow + ")",
        width: "45%"
      }}
    ></div>
  );
}

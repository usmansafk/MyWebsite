import React, { useEffect, useRef } from "react";
import "../welcome/WelcomeStyle.scss";
import { init } from "ityped";

const Welcome = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 60,
      strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Java Developer",
        "Photographer"
      ]
    });
  }, []);

  return (
    <div className="welcome" id="welcome">
      <div className="intro">
        <h4>Hello, my name is</h4>
        <h1>Usman Sajid</h1>
        <h2>
          and I'm a <span ref={textRef}></span>
        </h2>
        <a href="#aboutme">
          <img
            className="arrow"
            src="resources/down-arrow.svg"
            alt="down arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default Welcome;

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
      <div className="left">
        <div className="wrap">
          <h2>Hello, I'm</h2>
          <h1>Usman Sajid</h1>
          <h3>
            and I'm a <span ref={textRef}></span>
          </h3>
          <a href="#aboutme">
            <img src="resources/down-arrow.svg" alt="down arrow" />
          </a>
        </div>
      </div>

      <div className="right">
        <div className="imgContainer">
          <img
            className="me"
            src="resources/UsmanSajid.png"
            alt="Usman Sajid"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

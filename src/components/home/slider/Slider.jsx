import React, { useState } from "react";
import "./SliderStyle.scss";
import "../../PortfolioSliderData";
import { SliderData } from "../../PortfolioSliderData.js";
import { GitHub } from "@material-ui/icons";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < SliderData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {SliderData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.logo} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.text}</p>
                  <a href={d.link}>
                    <GitHub className="github-icon" />
                  </a>
                  {/* <span>GitHub Link</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="./resources/right-arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="./resources/right-arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Slider;

// const Slider = () => {
//   return (
//     <div className="works" id="works">
//       <div className="slider">
//         <div className="container">
//           <div className="item">
//             <div className="left">
//               <div className="leftContainer">
//                 <div className="imgContainer">
//                   <img src="./resources/web-site.png" alt="" />
//                 </div>
//                 <h1>Title</h1>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Doloremque debitis veritatis animi tenetur, nemo laboriosam
//                   reprehenderit!
//                 </p>
//                 <span>GitHub Link</span>
//               </div>
//             </div>

//             <div className="right">
//               <img src="./resources/AWL-2.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

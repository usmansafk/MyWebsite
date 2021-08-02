import React, { useState, useEffect } from "react";
import "../portfolio/PortfolioStyle.scss";
import PortfolioList from "./portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  graphicsPortfolio,
  photographyPortfolio
} from "../../PortfolioData.js";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web Applications" }
    // { id: "mobile", title: "Mobile App" },
    // { id: "graphics", title: "Graphics" },
    // { id: "photo", title: "Photography" }
    //Uncomment these when you produce work for each section
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "graphics":
        setData(graphicsPortfolio);
        break;
      case "photo":
        setData(photographyPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <>
            <a href={d.link} target="_blank">
              <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

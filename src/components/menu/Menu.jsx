import React from "react";
import "./MenuStyle.scss";

//=>
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#welcome">Welcome</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutme">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#techstack">Tech Stack</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li>~</li>
        <br />
        <li>
          <a href="#blog" className="blog">
            Blog
          </a>
          <h6>Coming Soon</h6>
        </li>
        <li>
          <a href="#collections" className="blog">
            Collections
          </a>
          <h6>Coming Soon</h6>
        </li>
      </ul>
    </div>
  );
}

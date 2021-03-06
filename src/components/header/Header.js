import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand-title" style={{ textDecoration: "none" }}>
          <div>FIRAWAN</div>
        </Link>
        <a
          href="/"
          className="toggle-button"
          onClick={handleClick}
        >
          <span className={click ? "bar bars" : "bar"}></span>
          <span className={click ? "bar bars" : "bar"}></span>
          <span className={click ? "bar bars" : "bar"}></span>
        </a>
        <div className={click ? "navbar-links active" : "navbar-links"}>
          <ul style={{ alignItems: "center" }}>
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li className="user">
              <i
                className="far fa-user-circle"
                style={{
                  fontSize: "40px",
                  alignSelf: "center",
                }}
              />
              <p>Robert .S</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default header;

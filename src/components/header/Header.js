import React, { useState } from "react";
import "./Header.css";

function header() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click, setClick] = useState(false);

  const handleClick = (e)=> {
    e.preventDefault()
    setClick(!click)
  }
  

  return (
    <>
       <nav class="navbar">
        <div class="brand-title">FIRAWAN</div>
        <a href="/" class="toggle-button" activeClassName="active" onClick={handleClick}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class={click ? "navbar-links active" : "navbar-links"}>
          <ul>
            <li><a href="?">Home</a></li>
            <li><a href="?">About</a></li>
            <li><a href="?">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default header;

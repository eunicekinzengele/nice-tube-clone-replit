import React from "react";
import "../Styles/nav.css";
import image from "../Images/logo_NiceTube.png";
import InputSearch from "./InputSearch";

function NavBar() {
  return (
    <div className="div__nav">
      <img className="img__logo" src={image} />
      <ul>
        <InputSearch />
      </ul>
    </div>
  );
}

export default NavBar;

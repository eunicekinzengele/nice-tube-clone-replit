import React from "react";
import "../Styles/nav.css";
import image from "../Images/logo_NiceTube.png";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="div__nav">
      <img className="img__logo" src={image} />
      <ul>
        <InputSearch />
        <Link to={"/ParentsCardPopular"}>
          <a>
            <li className="liste_nav">Tous</li>
          </a>
        </Link>
        <Link to={"/ParentsCardChannel"}>
          <a>
            <li className="liste_nav">Abonnement</li>
          </a>
        </Link>
       
      </ul>
    </div>
  );
}

export default NavBar;

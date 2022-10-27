import React from "react";
import "../Styles/nav.css";
import image from "../Images/logo_NiceTube.png";
import Search from "./Search";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="div__nav">
      <img className="img__logo" src={image} />
      <ul>
        <Search />
        <Link to={"/ParentsContainer"}>
          <a>
            <li className="liste_nav">Tous</li>
          </a>
        </Link>
        <Link to={"/ParentsContainerSubscribe"}>
          <a>
            <li className="liste_nav">Abonnement</li>
          </a>
        </Link>
        <Link>
          <a>
            <li className="liste_nav">Bibliothèque</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

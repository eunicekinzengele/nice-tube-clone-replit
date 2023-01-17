import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Styles/nav_menuHumburger.css";

function Nav_menu_humburger() {
  return (
      <div className="navHumburger">
      <div className="side_link align-items-center">
      <NavLink
      className={(nav) => (nav.isActive ? "side_list_red" : "side_list ")}
      to={"/PageOfPopularVideo"}
      >
      Accueil
      </NavLink>
      </div>
      <div className="side_link align-items-center">
      <NavLink
      className={(nav) => (nav.isActive ? "side_list_red" : "side_list ")}
      to={"/PageOfSubscribedChannels"}
      >
      Abonnements
      </NavLink>
      </div>
      </div>
      );
}

export default Nav_menu_humburger;

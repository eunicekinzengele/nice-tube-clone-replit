import React from "react";
import "../Styles/sidebar.css";
import Logout from "./Logout";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const profil = localStorage.getItem("profilUser");
  const [active, setActive] = useState();
  return (
    <div className="container bg-dark div__dashboard" lg={4}>
      <div className="container_list row align-item-center">
        <ul className="list__dashboard">
          <div className="lien_accueil">
            <NavLink
              className={(nav) =>
                nav.isActive ? "side_list_red" : "side_list "
              }
              to={"/PageOfPopularVideo"}
            >
              Accueil
            </NavLink>
          </div>
          <div className="lien_abonnes">
            <NavLink
              className={(nav) =>
                nav.isActive ? "side_list_red" : "side_list "
              }
              to={"/PageOfSubscribedChannels"}
            >
              Abonnements
            </NavLink>
          </div>
        </ul>
        <ul className="img_buton">
          <li>
            <img className="profil_img" src={profil} />
          </li>
          <button className="btn btn_logout">
            <Logout />
          </button>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;

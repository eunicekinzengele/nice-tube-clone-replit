import React from "react";
import { NavLink, Link } from "react-router-dom";
import SocialNetworkLinks from "./SocialNetworkLinks";
import Logout from "./Logout";
import Profil from "./Profil";
import "../Styles/sidebar.css";

export const Sidebar = () => {
  const profil = localStorage.getItem("profilUser");

  return (
    <div>
      {/* <div className="container col-3 vh-100"></div> */}
      {/* <div className="container col-3 bg-dark card vh-100 cont_left align-items-center"> */}
      <div className="essaye">
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
      <div className="img_buton">
        <Link to={`/PageOfProfil`}>
          <img className="profil_img" src={profil} />
        </Link>
        <Profil/>
        <button className="btn btn_logout">
          <Logout />
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;

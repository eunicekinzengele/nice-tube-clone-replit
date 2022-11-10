import React from "react";
import "../Styles/sidebar.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function SideBar() {
  const profil = localStorage.getItem("profilUser");
  return (
    <div className="div__dashboard">
      <div className="container_list">
        <ul className="list__dashboard">
          <li className="side_list">
            <Link to={"/ParentsCardPopular"} >
              Tous
            </Link>
          </li>
          <li className="side_list">
            <Link to={"/ParentsCardChannel"} >
              Abonnements
            </Link>
          </li>
          <li>
            <li>
              <img className="profil_img" src={profil} />
            </li>
            <button className="btn_logout">
              <Logout />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;

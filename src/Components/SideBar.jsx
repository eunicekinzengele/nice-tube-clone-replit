import React from "react";
import "../Styles/sidebar.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const profil = localStorage.getItem("profilUser");
  const[active, setActive] = useState();
  return (
    <div className="div__dashboard">
      <div className="container_list">
        <ul className="list__dashboard">
            <Link to={"/ParentsCardPopular"} >
            <li className="side_list">
              Acceueil
            </li>
            </Link>
            <Link to={"/ParentsCardChannel"} >
             <li className="side_list">
              Abonnements
              </li>
            </Link>
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

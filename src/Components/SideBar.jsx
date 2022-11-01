import React from "react";
import "../Styles/dashboard.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="div__dashboard">
      <ul className="list__dashboard">
        <li>
          <Link to={"/ParentsCardPopular"} className="side_list">
            Tous
          </Link>
        </li>
        
        <li>
          <Link to={"/ParentsCardChannel"} className="side_list">
            Abonnements
          </Link>
        </li>
        <li>
          <li>
            <img className="profil_img" src=""/>
          </li>
          <button className="btn_logout">
            <Logout />
          </button>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

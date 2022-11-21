import React from "react";
import "../Styles/sidebar.css";
import Logout from "./Logout";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const profil = localStorage.getItem("profilUser");
  const[active, setActive] = useState();
  return (
    <div className="div__dashboard">
      <div className="container_list">
        <ul className="list__dashboard">       
            <NavLink className={(nav)=>
           nav.isActive ? 'side_list_red' : 'side_list '
          }
             to={"/PageOfPopularVideo"} >
            {/* <li className="side_list"> */}
              Acceueil
            {/* </li> */}
            </NavLink>
          
            <NavLink className={(nav)=>
              nav.isActive ? 'side_list_red' : 'side_list '
            }
             to={"/PageOfSubscribedChannels"} >
             {/* <li className="side_list"> */}
              Abonnements
              {/* </li> */}
            </NavLink>
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

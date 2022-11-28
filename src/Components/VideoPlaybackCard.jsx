import React from "react";
import "../Styles/videoplayback.css";
import { NavLink, Link, useParams } from "react-router-dom";
import Logout from "./Logout";


export default function VideoPlaybackCard() {
  const { lecture } = useParams();
  const profil = localStorage.getItem("profilUser");

  return (
    <div className="container principal">
    <div className="row">
      <div className="container col-3 vh-100"></div>
      <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
        <div className="side_link align-items-center">
          <NavLink
            className={(nav) =>
              nav.isActive ? "side_list_red" : "side_list "
            }
            to={"/PageOfPopularVideo"}
          >
            Accueil
          </NavLink>
        </div>
        <div className="side_link align-items-center">
          <NavLink
            className={(nav) =>
              nav.isActive ? "side_list_red" : "side_list "
            }
            to={"/PageOfSubscribedChannels"}
          >
            Abonnements
          </NavLink>
        </div>
        <div className="img_buton">
          <img className="profil_img" src={profil} />
          <button className="btn btn_logout">
            <Logout />
          </button>
        </div>
      </div>

      <div class="container col-8 col-auto bg-dark card cont-rigth">
        <div className="container">
          <div className="row_emplacement flex-wrap d-flex">
        <iframe
          width="650"
          height="400"
          src={`https://www.youtube.com/embed/${lecture}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
       </div>
          </div>
        </div>
      </div>
  </div> 
  );
}

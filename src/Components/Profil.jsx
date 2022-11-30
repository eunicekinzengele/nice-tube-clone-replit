import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "../Styles/profil.css";
import Image from "../Images/profil_picture.jpg";
import Appareil from "../Images/appareil.png";

export default function profil() {
  return (
    <div>
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

          <div class="container col-8 col-auto card cont_profil">
            <div className="container">
              <div className="profil_page flex-wrap d-flex justify-content-center">
                <div className="row profil_image justify-content-center">
                  <h2 className="profil_title">Modifiez votre profil</h2>
                  <div className="row img_and_icon d-flex flex-wrap">
                    <img className="img_profil" src={Image}></img>
                    <button className="button_appareil">
                      <img className="appareil_photo" src={Appareil}></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

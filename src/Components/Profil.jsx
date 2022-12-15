import React, { useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logout from "./Logout";
import "../Styles/profil.css";
import Image from "../Images/profil_picture.jpg";
import Appareil from "../Images/appareil.png";
// import SocialNetworkLinks from "./SocialNetworkLinks";
import Sidebar from "./Sidebar";

export default function profil() {
  const ref = useRef();
  const handleClick = (e) => {
    ref.current.click();
  };

  const profil = localStorage.getItem("profilUser");
  return (
    <div>
      <div className="container principal">
        <div className="row">
          <div className="container col-3 vh-100"></div>
          <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
            <Sidebar />
          </div>

          <div class="container col-8 col-auto card cont_profil">
            <div className="container ">
              <div className="row profil_page flex-wrap d-flex justify-content-center">
                <div className="row profil_image d-flex flex-wrap ">
                  <h2 className="profil_title">Modifiez votre profil</h2>
                  <div className="row img_and_icon d-flex flex-wrap">
                    <img className="img_profil" src={Image}></img>

                    <input
                    className="input_displayNone"
                      type="file"
                      id="test"
                      name="file"
                      onChange={handleClick}
                    />

                    <label
                      htmlFor="test"
                      onChange={handleClick}
                      className="button_appareil"
                    >
                      <img
                        ref={ref}
                        type="file"
                        htmlFor="test"
                        id="test"
                        name="file"
                        className="appareil_photo"
                        src={Appareil}
                        onChange={handleClick}
                      ></img>
                    </label>

                    {/* <button htmlFor="test" className="button_appareil">
                      <img
                        ref={ref}
                        type="file"
                        htmlFor="test"
                        className="appareil_photo"
                        src={Appareil}
                      ></img>
                    </button> */}
                  </div>
                </div>
                <div className="div_profilname">
                  <input
                    className="input_profil_name"
                    placeholder="Modifiez votre nom"
                    type="texte"
                  />
                  {/* <button className="button_modifier" type="submit">
                    <BsSearch />
                  </button> */}
                </div>
              </div>
              <div className=" div_liens container text-align-center ">
                <h2 className="profil_title">Liens réseaux sociaux</h2>
                <div className="row row_liens flex-wrap d-flex">
                  <div className="container container_link">
                    <div className="col facebook lien_rx">
                      <input
                        className="link inputfacebooklink"
                        placeholder="Ajoutez votre lien Facebook"
                        type="texte"
                      />
                    </div>
                    <div className="col instagram lien_rx">
                      <input
                        className="link"
                        placeholder="Ajoutez votre lien Instagram"
                        type="texte"
                      />
                    </div>
                    <div className="col tiktok lien_rx">
                      <input
                        className="link"
                        placeholder="Ajoutez votre lien Tiktok"
                        type="texte"
                      />
                    </div>
                    <div className="col twitter lien_rx">
                      <input
                        className="link"
                        placeholder="Ajoutez votre lien Twitter"
                        type="texte"
                      />
                    </div>
                  </div>
                </div>
                <div className="container buttons_annuler_modifier">
                  <button className="col modifier_annuler">Modifier</button>
                  <button className="col modifier_annuler">Annuler</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/profil.css";
import Sidebar from "./Sidebar";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiTiktok } from "react-icons/si";
import Appareil from "../Images/appareil.png";

function ProfilAndModification({ user }) {
  return (
    <div>
      <div>
        <div className="container principal">
          <div className="row">
            <div className="container correction_container col-3 vh-100"></div>
            <div class="container col-3 bg-dark card vh-100 cont_left align-items-center">
              <Sidebar />
            </div>

            <div class="container col-8 col-auto card cont_profil">
              <div className="container ">
                <div className="row profil_page flex-wrap d-flex justify-content-center">
                  <div className="row profil_image d-flex flex-wrap ">
                    <h2 className="profil_title">Your profile</h2>
                    <div className="row img_and_icon d-flex flex-wrap">
                      <div className="col image_appareilIcon">
                        {/* <img
                          src={image}
                          // src={imageUrl}
                          alt={selectedImage.name}
                          className="img_profil"
                        /> */}

                        <img
                          // src={image}
                          src={user.imageUrl}
                          alt="profile-picture"
                          className="img_profil"
                        />

                        {/* <img className="img_profil" src={Image}></img> */}

                        <input
                          className="input_displayNone"
                          type="file"
                          id="test"
                          name="file"
                          // onChange={handleClick}
                        />
                        <div>
                          <label
                            htmlFor="test"
                            // onChange={handleClick}
                            className="button_appareil"
                          >
                            <img
                              // ref={ref}
                              type="file"
                              htmlFor="test"
                              id="test"
                              name="file"
                              className="appareil_photo"
                              src={Appareil}
                              // onChange={handleClick}
                            ></img>
                          </label>
                        </div>
                        <div className="profil_name">
                          <h6>{user.name}</h6>
                        </div>
                      </div>
                      <div className="col rxSociauxLinks">
                        <ul>
                          <a href={user.facebook}>
                            <li className="icon_buttonrx">
                              <FaFacebookF color="white" size={30} />
                            </li>
                          </a>
                          <a href={user.email}  mailto={`mailto:${user.email}`}>
                            <li className="icon_buttonrx">
                              <SiGmail color="white" size={30} />
                            </li>
                          </a>
                          <a href={user.tiktok}>
                            <li className="icon_buttonrx">
                              <SiTiktok color="white" size={30} />
                            </li>
                          </a>
                          <a href={user.linkedin}>
                            <li className="icon_buttonrx">
                              <FaLinkedinIn color="white" size={30} />
                            </li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="profil_title">Modify your profile</h2>
                <div className="div_profilname">
                  <input
                    name=""
                    id=""
                    // value={user.name}
                    // onChange={handleChange}
                    className="input_profil_name"
                    placeholder="Modifiez votre nom"
                    type="texte"
                  />
                </div>
                <div className=" div_liens container text-align-center ">
                  <div className="row row_liens flex-wrap d-flex">
                    <div className="container container_link">
                      <div className="col facebook lien_rx">
                        <input
                          name=""
                          id=""
                          // value={user.name}
                          // onChange={handleChange}
                          className="link inputfacebooklink"
                          placeholder="Ajoutez votre lien Facebook"
                          type="text"
                        />
                      </div>
                      <div className="col email lien_rx">
                        <input
                          name=""
                          id=""
                          // value={user.email}
                          // onChange={handleChange}
                          className="link"
                          placeholder="Ajoutez votre email"
                          type="text"
                        />
                      </div>
                      <div className="col tiktok lien_rx">
                        <input
                          name=""
                          id=""
                          // value={user.tiktok}
                          // onChange={handleChange}
                          className="link"
                          placeholder="Ajoutez votre lien Tiktok"
                          type="text"
                        />
                      </div>
                      <div className="col linkedin lien_rx">
                        <input
                          name=""
                          id=""
                          // value={user.linkedin}
                          // onChange={handleChange}
                          className="link"
                          placeholder="Ajoutez votre lien Linkedin"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container buttons_annuler_modifier">
                    <Link
                    // to={`/userprofile/${localStorage.getItem("userId")}`}
                    >
                      <button className="col modifier_annuler">Annuler</button>
                    </Link>
                    <Link>
                      <button
                        className="col modifier_annuler"
                        type="submit"
                        // onClick={handleSubmit}
                      >
                        Modifier
                      </button>
                    </Link>
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

export default ProfilAndModification;

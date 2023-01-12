import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
// import Logout from "./Logout";
import image from "../Images/profil_picture.jpg";
import "../Styles/profil.css";
import Appareil from "../Images/appareil.png";
// import SocialNetworkLinks from "./SocialNetworkLinks";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function ChangeProfil() {
  const { userId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [user, setUser] = useState({
    imageUrl: "",
    name: "",
    email: "",
    tiktok: "",
    linkedin: "",
  });
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [tiktok, setTiktok] = useState();
  // const [linkedin, setLinkedin] = useState();


  const fetchData = `http://localhost:3000/users/${userId}`;
  const accessToken = localStorage.getItem("token");
  const ref = useRef();
  const handleClick = (e) => {
    ref.current.click(e);
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${userId}`, {
        imageUrl: user.imageUrl,
        name: user.name,
        email: user.email,
        tiktok: user.tiktok,
        linkedin: user.linkedin,
      })
      .then(
        (response) => {
          console.log("response : ", response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  console.log("user submission : ", user.name);

  useEffect(() => {
    fetch(fetchData, {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log("items: ", data);
      });
  }, []);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
                    {imageUrl && selectedImage ? (
                      <img
                        src={image}
                        // src={imageUrl}
                        alt={selectedImage.name}
                        className="img_profil"
                      />
                    ) : (
                      <img
                        src={image}
                        // src={user.imageUrl}
                        alt="profile-picture"
                        className="img_profil"
                      />
                    )}

                    {/* <img className="img_profil" src={Image}></img> */}

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
                  <div className="profil_name">Eunice &nbsp; Kinzengele</div>
                  </div>
                </div>
                <div className="div_profilname">
                  <input
                    name=""
                    id=""
                    value={user.name}
                    onChange={handleChange}
                    className="input_profil_name"
                    placeholder="Modifiez votre nom"
                    type="texte"
                  />
                </div>
              </div>
              <div className=" div_liens container text-align-center ">
                <h2 className="profil_title">Liens réseaux sociaux</h2>
                <div className="row row_liens flex-wrap d-flex">
                  <div className="container container_link">
                    <div className="col facebook lien_rx">
                      <input
                        name=""
                        id=""
                        value={user.name}
                        onChange={handleChange}
                        className="link inputfacebooklink"
                        placeholder="Ajoutez votre lien Facebook"
                        type="text"
                      />
                    </div>
                    <div className="col instagram lien_rx">
                      <input
                        name=""
                        id=""
                        value={user.email}
                        onChange={handleChange}
                        className="link"
                        placeholder="Ajoutez votre email"
                        type="text"
                      />
                    </div>
                    <div className="col tiktok lien_rx">
                      <input
                        name=""
                        id=""
                        value={user.tiktok}
                        onChange={handleChange}
                        className="link"
                        placeholder="Ajoutez votre lien Tiktok"
                        type="text"
                      />
                    </div>
                    <div className="col twitter lien_rx">
                      <input
                        name=""
                        id=""
                        value={user.linkedin}
                        onChange={handleChange}
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
                      onClick={handleSubmit}
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
  );
}

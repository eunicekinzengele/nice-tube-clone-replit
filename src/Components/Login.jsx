import React, { useEffect } from "react";
import "../Styles/login.css";
import Image from "../Images/logo_NiceTube.png";
import { FcGoogle } from "react-icons/fc";
import { gapi, loadAuth2 } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexteUse } from "./Contextes/UseContexte";

function Login() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(contexteUse);
  const clientId =
    "129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com";
  /*  import.meta.env.VITE_CLIENT_ID; */
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        clientId,
        "https://www.googleapis.com/auth/youtube"
      );
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById("started"), auth2);
      }
    };
    setAuth2();
  }, []);
  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        updateUser(googleUser);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };

  const updateUser = (user) => {
    console.log(user.xc.access_token);
    localStorage.setItem("token", user.xc.access_token);
    setToken(user.xc.access_token);
    const profileImg = user.getBasicProfile().getImageUrl();
    localStorage.setItem("profilUser", profileImg);
    console.log("bonjour", profileImg);
    navigate("/ParentsCardPopular");

    console.log(user);
  };
  return (
    <div className="connexion_space">
      <div className="general">
        <img className="logo__connexion" src={Image} />
        <p>Sign in with</p>
        <button
          id="started"
          className="button_login btn btn-danger d-block text-center"
        >
          <FcGoogle /> Google
        </button>
      </div>
    </div>
  );
}
export default Login;

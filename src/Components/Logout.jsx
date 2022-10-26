import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import '../Styles/logout.css';
import { gapi, loadAuth2 } from "gapi-script";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const nav = useNavigate()

      const signOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          nav('/')
          console.log('User signed out.');
          window.localStorage.removeItem('token')
        });
      }
    return (
      <>
        <div id="btn-logout" onClick={signOut}>Sign out</div>
      </>
    )
  }


export default Logout;
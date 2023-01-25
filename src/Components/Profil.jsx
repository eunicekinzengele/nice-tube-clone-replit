import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
// import Logout from "./Logout";
import facebookIcon from "../Images/facebookIcon-removebg-preview.png";
import emailIcon from "../Images/gmailIcon-removebg-preview.png";
import tiktokIcon from "../Images/tiktok-removebg-preview.png";
import linkedinIcon from "../Images/linkedinIcon.png";
import image from "../Images/profil_picture.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiTiktok } from "react-icons/si";
import "../Styles/profil.css";
import Appareil from "../Images/appareil.png";
// import SocialNetworkLinks from "./SocialNetworkLinks";
import ProfilAndModification from "./ProfilAndModification";
import Sidebar from "./Sidebar";
import axios from "axios";




export default function Profil() {

  const [user, setUser]= useState([]);
  const userId= localStorage.getItem("userId")
  const navigate= useNavigate();
  const fetchData = `http://localhost:3000/users/${userId}`; /*   */
  const accessToken= localStorage.getItem('token')
  
  useEffect(()=>{
    fetch(fetchData,{
      method:"GET",
    })
    .then((response)=> response.json())
    .then((data)=>{
      setUser(data)
      // console.log('items:', data)
    })
  },[])

  useEffect(() => {
    if (!accessToken) {
       navigate('/')
    }
 }, [accessToken, navigate])

 console.log("user data : ", user);

  return (
    <>
    <ProfilAndModification user={user}/>
    </>
  );
}
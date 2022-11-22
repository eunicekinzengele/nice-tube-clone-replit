import React from "react";
import "../Styles/navbar.css";
import image from "../Images/logo_NiceTube.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() { 
  return (
    
    <div className="div__nav">
     <Link to= "/PageOfPopularVideo">
     <img className="img__logo" src={image} />
     </Link>
      <ul>
        <SearchInput />
      </ul>
    </div>
  );
}

export default NavBar;

import React from "react";
import "../Styles/navbar.css";
import image from "../Images/logo_NiceTube.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive'


function NavBar() {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

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

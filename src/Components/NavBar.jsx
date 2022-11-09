import React from "react";
import "../Styles/navbar.css";
import image from "../Images/logo_NiceTube.png";
import SearchInput from "./SearchInput";
// import { useMediaQuery } from 'react-responsive'


function NavBar() {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

  return (
    <div className="div__nav">
     <img className="img__logo" src={image} />
      <ul>
        <SearchInput />
      </ul>
    </div>
  );
}

export default NavBar;

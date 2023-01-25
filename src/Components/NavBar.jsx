import React from "react";
import "../Styles/navbar.css";
import image from "../Images/logo_NiceTube.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import HumburgerMenu from "./HumburgerMenu";
// import Row from 'react-bootstrap/Row';
import Nav_menu_humburger from "./Nav_menu_humburger";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  


  const profil = localStorage.getItem("profilUser");
  const [open, setOpen] = useState(false);

  return (
    <section className="header fixed-top container text-center text-light">
      <div className="row">
        <Col className="logo_accueil">
          <Link to="/PageOfPopularVideo">
            <img className="img__logo" src={image} />
          </Link>
          <HumburgerMenu setOpen={setOpen} open={open} />
          {open && <Nav_menu_humburger />}
        </Col>
        <Col>
          <SearchInput />
        </Col>
        <Col>
          <Link to={`/PageOfProfil`}>
            <img className="profil_img_nav" src={profil} />
          </Link>
        </Col>
        <ul></ul>
      </div>
    </section>
  );
}

export default NavBar;

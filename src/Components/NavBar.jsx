import React from "react";
import "../Styles/navbar.css";
import image from "../Images/logo_NiceTube.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
// import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function NavBar() {
  const profil = localStorage.getItem("profilUser");

  return (
    <section className="header fixed-top container text-center text-light">
      <div className="row">
        <Col className="logo_accueil">
          <Link to="/PageOfPopularVideo">
            <img className="img__logo" src={image} />
          </Link>
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

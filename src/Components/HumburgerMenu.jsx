import React from "react";
import { useState } from "react";
import "../Styles/humburgerMenu.css";


function HumburgerMenu({setOpen, open}) {
  console.log("open", open);
  console.log(setOpen);

  return( 
    <div className="barMenu" onClick={() => setOpen(!open) }> 
        <div className="barHumburger"></div>
        <div className="barHumburger"></div>
        <div className="barHumburger"></div>
    </div>

)}
// console.log(setOpen);

export default HumburgerMenu;

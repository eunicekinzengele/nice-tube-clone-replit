import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Subscribed_channels from "./Subscribed_channels";

export default function ParentsCardChannel() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Subscribed_channels/>
    </div>
  );
}

import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import SubscribedChannels from "../SubscribedChannels";

export default function PageOfSubscribedChannels() {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <SubscribedChannels/>
    </div>
  );
}

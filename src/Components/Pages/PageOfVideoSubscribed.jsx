import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import VideoOfSubscribedChannels from "../VideoOfSubscribedChannels";

export default function PageOfVideoSubscribed() {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <VideoOfSubscribedChannels />
    </div>
  );
}

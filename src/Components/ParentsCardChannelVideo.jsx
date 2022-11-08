import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Video_of_subscribed_channels from "./VideoOfSubscribedChannels";

export default function ParentsCardChannelVideo() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <VideoOfSubscribedChannels />
    </div>
  );
}

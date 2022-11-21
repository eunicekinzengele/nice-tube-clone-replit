import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import VideoPlaybackCard from "../VideoPlaybackCard";

export default function PageOfVideoPlayback() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <VideoPlaybackCard />
    </div>
  );
}

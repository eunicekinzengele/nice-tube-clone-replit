import React from "react";
import NavBar from "../NavBar";
import VideoPlaybackCard from "../VideoPlaybackCard";

export default function PageOfVideoPlayback({socket}) {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <VideoPlaybackCard socket={socket} />
    </div>
  );
}

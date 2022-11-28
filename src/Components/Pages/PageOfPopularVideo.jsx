import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import PopularVideosCard from "../PopularVideosCard";

export default function PageOfPopularVideo() {
  return (
    <div className="exemple">
      <NavBar />
      {/* <SideBar /> */}
      <PopularVideosCard />
    </div>
  );
}

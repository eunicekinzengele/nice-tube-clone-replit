import React from "react";
import SideBar from "../SideBar";
import SearchResult from "../SearchResult";
import NavBar from "../NavBar";

export default function PageOfSearchResults() {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <SearchResult />
    </div>
  );
}

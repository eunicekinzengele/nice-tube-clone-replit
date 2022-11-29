import React from "react";
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

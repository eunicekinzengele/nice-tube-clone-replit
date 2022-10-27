import React from "react";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Container from "./Container";

export default function ParentsContainer() {
  return (
    <div className="exemple">
      <Nav />
      <Dashboard />
      <Container />
    </div>
  );
}

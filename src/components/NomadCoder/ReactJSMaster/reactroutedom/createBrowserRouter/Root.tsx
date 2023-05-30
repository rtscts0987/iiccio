import React from "react";
import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

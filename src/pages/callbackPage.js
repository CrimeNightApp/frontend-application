import React from "react";
import { NavBar } from "../components/navigation/desktop/navBar";
import { MobileNavBar } from "../components/navigation/mobile/mobileNavBar";

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content" />
    </div>
  );
};
import React from "react";
import { NavBar } from "./navigation/desktop/navBar";
import { MobileNavBar } from "./navigation/mobile/mobileNavBar";
import { PageFooter } from "./pageFooter";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};

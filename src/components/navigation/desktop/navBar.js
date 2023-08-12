import React from "react";
import { NavBarBrand } from "./navBarBrand";
import { NavBarButtons } from "./navBarButtons";
import { NavBarTabs } from "./navBarTabs";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
};

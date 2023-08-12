import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";
import { useHasRole } from "../../auth/useHasRole";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();
  const isAdmin = useHasRole('admin');

  return (
    <div className="nav-bar__tabs">
      {isAuthenticated && (
        <>
          <NavBarTab path="/profile" label="Profile" />
          {isAdmin &&
            <NavBarTab path="/admin" label="Admin" />
          }
        </>
      )}
    </div>
  );
};
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobileNavBarTab";
import { useHasRole } from "../../auth/userHasRole";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();
  const isAdmin = useHasRole('admin')

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
      {isAuthenticated && isAdmin && (
        <>
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../buttons/login";
import { LogoutButton } from "../buttons/logout";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
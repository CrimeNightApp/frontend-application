// This file ensures that a user is authenticated before accessing protected pages,
// and if a role is provided, check that the user has that role before continuing,
// else send them to /unauthorized.

import React from "react";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "../pageLoader";
import { useHasRole } from "./userHasRole"; // Import the custom hook
import { Navigate } from "react-router-dom";

export const AuthenticationGuard = ({ component, role }) => {
  const { isAuthenticated } = useAuth0();
  const hasRole = useHasRole(role); // Always call the custom hook

  // If the user is not authenticated, render the authentication component
  if (!isAuthenticated) {
    const Component = withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <PageLoader />
        </div>
      ),
    });
    return <Component />;
  }

  // If a role is provided and the user doesn't have it, redirect to the unauthorized page
  if (role && !hasRole) {
    return <Navigate to="/unauthorized" />;
  }

  // If the user is authenticated and has the required role (if any), render the component
  return React.createElement(component);
};

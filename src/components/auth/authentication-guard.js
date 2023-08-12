import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "../page-loader";
import { useHasRole } from "./useHasRole"; // Import the custom hook
import { Navigate } from "react-router-dom";

export const AuthenticationGuard = ({ component, role }) => {
  const hasRole = useHasRole(role); // Always call the custom hook

  // If a role is provided and the user doesn't have it, redirect to the home page
  if (role && !hasRole) {
    return <Navigate to="/" />;
  }

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};

// This file is to check that a user has a role in Auth0 that matches the one provided.

import { useAuth0 } from "@auth0/auth0-react";

export const useHasRole = (role) => {
  const { user } = useAuth0();
  const userRoles = user?.['https://hasura.io/jwt/claims']['x-hasura-allowed-roles'] || [];

  // If no role is provided, return true; otherwise, check if the user has the required role
  return role ? userRoles.includes(role) : true;
};

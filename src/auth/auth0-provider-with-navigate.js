import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  useEffect(() => {
    // Fetch the token silently once the user is authenticated
    const fetchToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        localStorage.setItem("auth0_id", token);
      } catch (error) {
        console.error("Error obtaining token:", error);
      }
    };

    fetchToken();
  }, [getAccessTokenSilently]);

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

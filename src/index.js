import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth/auth0ProviderWithNavigate";
import { ApolloProviderWithAuth0 } from "./graphql/client"; // Import the new component
import './styles/index.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ApolloProviderWithAuth0>
          <App />
        </ApolloProviderWithAuth0>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

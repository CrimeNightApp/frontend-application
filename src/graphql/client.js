// This file sets up the GraphQL client along with an Authorization header if the user is authenticated.

import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

export const ApolloProviderWithAuth0 = ({ children }) => {
  const { isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: "http://localhost:25080/v1/graphql", // Your Hasura instance
  });

  // Create the authentication middleware
  const authMiddleware = setContext(async (_, { headers }) => {
    if (isLoading || !isAuthenticated) {
      return { headers }; // Return early if Auth0 is still loading or user is not authenticated
    }

    try {
      const tokenClaims = await getIdTokenClaims();
      const token = tokenClaims?.__raw;

      // Check if the token is defined
      if (token) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${token}`,
          },
        };
      }
    } catch (error) {
      console.error("Authentication error", error);
    }

    // If the token is not defined or an error occurs, return the headers without the authorization header
    return { headers };
  });

  // Combine the authentication middleware with the HTTP link
  const link = ApolloLink.from([authMiddleware, httpLink]);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

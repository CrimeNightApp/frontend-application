import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

export const ApolloProviderWithAuth0 = ({ children }) => {
  const { isLoading, getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: "http://localhost:25080/v1/graphql", // Your Hasura instance
  });

  // Create the authentication middleware
  const authMiddleware = setContext(async (_, { headers }) => {
    if (isLoading) {
      return { headers }; 
    }

    try {
      const tokenClaims = await getIdTokenClaims();
      const token = tokenClaims?.__raw;
    
      console.log(token);
    
      // Check if the token is defined
      if (token) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${token}`,
          },
        };
      } else {
        // If the token is not defined, return the headers without the authorization header and they will be assumed as Public.
        return { headers };
      }
    } catch (error) {
      console.error("Authentication error", error);
      return { headers };
    }
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

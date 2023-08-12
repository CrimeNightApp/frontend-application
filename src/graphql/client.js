import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:25080/v1/graphql", // Your Hasura instance
});

const authLink = setContext((_, { headers }) => {
  // Retrieve the token from local storage or elsewhere
  const token = localStorage.getItem('auth0_token');

  // If the user has authed, add the Auth header
  if (token) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else { // Else use the default unauthorized Hasura role (public)
    return {
      headers: {
        ...headers,
      },
    };
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

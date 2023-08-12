import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from '@auth0/auth0-react';

const httpLink = createHttpLink({
  uri: "http://localhost:25080/v1/graphql", // Your Hasura instance
});

const authLink = setContext((_, { headers }) => {
  const { getAccessTokenSilently } = useAuth0();

  async function fetchSession() {
    const token = await getAccessTokenSilently();
    return token;
  }
  const authLinkWithHeader = fetchSession().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return authLinkWithHeader;
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

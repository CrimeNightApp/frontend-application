import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useQuery, gql } from "@apollo/client";
import { useAuth0 } from '@auth0/auth0-react';

const USERS_QUERY = gql`
  query GetUsers($userId: String!) {
    users(where: { auth0_id: { _eq: $userId } }) {
      id
      auth0_id
      name
      created_at
      last_seen
    }
  }
`;

export const ProfilePage = () => {
  const { user } = useAuth0();
  const userId = user?.sub;

  const { loading, error, data } = useQuery(USERS_QUERY, {
    variables: { userId },
    skip: !userId // Skip query if userId is not available
  });

  const userRoles = user['https://hasura.io/jwt/claims']['x-hasura-allowed-roles'] || []; // Get list of roles for the user from Auth0

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              <strong>Any authenticated user will be able to see their profile information here.</strong>
              <br></br>
              <strong>Below is the array of user information returned from GraphQL</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
                <p className="profile__roles">Roles: {userRoles.join(', ')}</p> {/* Display roles */}
              </div>
            </div>
            <div className="profile__details">
              <CodeSnippet
                title="User Profile Object"
                code={JSON.stringify(data, null, 2)}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

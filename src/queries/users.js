import { gql } from "@apollo/client"

export const USER = gql`
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

export const UPDATE_LAST_SEEN = gql`
  mutation UpdateLastSeenToNow {
    update_users(
      where: { name: { _eq: "aaronplace9" } }, 
      _set: { last_seen: "now()" }
    ) { 
      affected_rows 
    }
  }
`

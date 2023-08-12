import { gql } from "@apollo/client";

export const ALL_VIDEOS = gql`
  query {
    videos {
      title
      video_url
      thumbnail_url
      description
    }
  }
`;
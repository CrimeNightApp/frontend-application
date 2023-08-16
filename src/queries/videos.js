import { gql } from "@apollo/client"

export const FEATURED_VIDEOS = gql`
  query GetFeaturedVideos {
    videos(where: {featured: {_eq: true}}) {
      title
      thumbnail_url
      video_url
      duration
    }
  }
`;
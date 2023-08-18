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

export const VIDEOS_BY_CATEGORY = gql`
  query GetVideosByCategory($category: String) {
    videos(where: {video_categories: {category: {name: {_eq: $category}}}}) {
      thumbnail_url
      title
      video_url
      duration
    }
  }
`;
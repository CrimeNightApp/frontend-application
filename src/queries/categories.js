import { gql } from "@apollo/client"

// All categories
export const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

// Categories sorted by most videos -> least videos, where the number of videos is not 0.
export const VIDEO_CATEGORIES = gql`
  query GetCategories {
    categories(order_by: { 
      video_categories_aggregate: { 
        count: desc 
      } 
    }, 
    where: {
      video_categories_aggregate: {
        count: {
          predicate: {
            _neq: 0
          }
        }
      }
    }) 
    {
      name
    }
  }
`;
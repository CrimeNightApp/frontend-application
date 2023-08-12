import React from "react";
import { Auth0Feature } from "./auth0Feature";
import { useQuery } from "@apollo/client";
import { ALL_VIDEOS } from "../queries/videos";

export const Auth0Features = () => {
  const { loading, error, data } = useQuery(ALL_VIDEOS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">All videos</h2>
      <div className="auth0-features__grid">
        {data.videos.map((feature) => (
          <Auth0Feature
            key={feature.video_url}
            title={feature.title}
            description={feature.description}
            url={feature.video_url}
            thumbnail_url={feature.thumbnail_url}
          />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useQuery } from "@apollo/client";
import { FEATURED_VIDEOS } from "../../queries/videos";
import { PageLoader } from "../pageLoader";
import VideoCard from "./videoCard";

export const FeaturedVideos = () => {
  const { loading, error, data } = useQuery(FEATURED_VIDEOS);
  
  if (loading) return <PageLoader/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-2xl mx-auto">
        {data.videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

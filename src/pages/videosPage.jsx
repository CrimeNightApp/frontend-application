import React from "react";
import PageLayout from "../components/pageLayout"
import { FeaturedVideos } from "../components/videos/videosFeatured";
import VideoCategories from "../components/videos/videoCategories";

export const VideosPage = () => (
  <PageLayout>
    <FeaturedVideos />
    <VideoCategories />
  </PageLayout>
);

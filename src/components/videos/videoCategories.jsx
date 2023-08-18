import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CATEGORIES } from "../../queries/categories";
import { VIDEOS_BY_CATEGORY } from "../../queries/videos";
import { NavigationButton, CategoryButton } from "../shared/categoryButtons";
import { PageLoader } from "../pageLoader";
import VideoCard from "./videoCard";

const CATEGORIES_PER_PAGE = 5;

const VideoCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(CATEGORIES);
  const {
    loading: videosLoading,
    error: videosError,
    data: videosData,
  } = useQuery(VIDEOS_BY_CATEGORY, {
    variables: { category: activeCategory },
    skip: !activeCategory,
  });

  // Set the default active category to the first one when categoriesData is available
  useEffect(() => {
    if (categoriesData && categoriesData.categories.length > 0) {
      setActiveCategory(categoriesData.categories[0].name);
    }
  }, [categoriesData]);

  if (categoriesLoading) return null;
  if (categoriesError) return <p>Error: {categoriesError.message}</p>;
  if (videosError) return <p>Error: {videosError.message}</p>;

  const totalCategories = categoriesData.categories.length;
  const totalPages = Math.ceil(totalCategories / CATEGORIES_PER_PAGE);
  const startIdx = currentPage * CATEGORIES_PER_PAGE;
  const navItems = categoriesData.categories.slice(
    startIdx,
    startIdx + CATEGORIES_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center space-x-5 py-4">
        <NavigationButton onClick={handlePreviousPage}>
          <ChevronLeftIcon className="w-5 h-5 text-BACKGROUND" />
        </NavigationButton>
        {navItems.map((category, index) => (
          <CategoryButton
            key={category.name}
            category={category}
            isActive={activeCategory === category.name}
            onClick={() => setActiveCategory(category.name)}
          />
        ))}
        <NavigationButton onClick={handleNextPage}>
          <ChevronRightIcon className="w-5 h-5 text-BACKGROUND" />
        </NavigationButton>
      </div>

      {/* Add a conditional rendering for the videos */}
      {videosLoading ? (
        <PageLoader />
      ) : (
        videosData && (
          <div className="mx-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-screen-2xl mx-auto">
              {videosData.videos.map((video) => (
                <VideoCard key={video.title} video={video} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default VideoCategories;

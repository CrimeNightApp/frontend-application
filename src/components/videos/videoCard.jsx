import React from "react";

function formatDuration(seconds) {
  const date = new Date(seconds * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  let formatted = "";
  if (hours > 0) { formatted += `${hours}h `; }
  if (minutes > 0) { formatted += `${minutes}m`; }

  return formatted.trim();
}

const VideoCard = ({ video }) => (
  <div className="py-2 relative w-full">
    <a href={video.video_url}>
      <img alt="thumbnail_url" src={video.thumbnail_url} className="rounded-2xl w-full h-auto" />
      <div className="absolute bottom-16 right-6 bg-SECONDARY rounded-md px-4">
        <div className="text-center text-neutral-100 text-base font-bold">{formatDuration(video.duration)}</div>
      </div>
    </a>
    <ul className="py-1 whitespace-nowrap text-ellipsis overflow-hidden">{video.title}</ul>
  </div>
);

export default VideoCard;

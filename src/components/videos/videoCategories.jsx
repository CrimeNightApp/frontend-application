import { useState } from "react";

const VideoCategories = () => {
  const [activeNav, setActiveNav] = useState(1);
  const navItems = ["Recently added", "Murder", "Famous", "Stalker", "Cold Case"];

  return (
    <div className="flex items-center justify-center space-x-5 py-4">
      {navItems.map((item, index) => (
        <div key={index} className={activeNav === index ?
          "w-[200px] bg-HIGHLIGHT rounded-lg text-TEXT-SECONDARY font-bold"
          :
          "w-[200px] bg-SECONDARY rounded-lg"} >
          <ul onClick={() => setActiveNav(index)} className="flex justify-center py-7 px-7 cursor-pointer">{item}</ul>
        </div>
      ))}
    </div>
  );
}

export default VideoCategories;

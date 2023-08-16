import { useState } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState(0);
  const navItems = ["Videos", "Articles", "Browse", "Forums", "Liked"];

  return (
    <div className="flex flex-2 items-center justify-center space-x-1">
      <div className="flex items-center py-1.5 px-1.5 rounded-full bg-PRIMARY">
        {navItems.map((item, index) => (
          <div key={index} className={activeNav === index ? "py-2 bg-HIGHLIGHT rounded-full text-TEXT-SECONDARY font-bold" : ""} >
            <ul onClick={() => setActiveNav(index)} className="px-7 cursor-pointer">{item}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;

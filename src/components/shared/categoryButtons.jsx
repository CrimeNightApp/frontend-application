import clsx from "clsx";

export const NavigationButton = ({ children, onClick }) => (
  <button className="w-9 h-9" onClick={onClick}>
    <div className="flex justify-center items-center w-9 h-9 bg-HIGHLIGHT rounded">
      {children}
    </div>
  </button>
);

export const CategoryButton = ({ category, isActive, onClick }) => (
  <div
    className={clsx("w-[200px] rounded-lg border border-BORDER", {
      "bg-HIGHLIGHT text-TEXT-SECONDARY font-bold": isActive,
      "bg-SECONDARY": !isActive,
    })}
    onClick={onClick}
  >
    <ul className="flex justify-center py-7 px-7 cursor-pointer">
      {category.name}
    </ul>
  </div>
);

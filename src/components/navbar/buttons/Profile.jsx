import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Profile = () => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button onClick={handleLogout}>
      <div className="flex items-center py-2 px-2 rounded-full bg-PRIMARY space-x-2">
        <img className="ProfilePicture w-9 h-9 rounded-full" src={user.picture} alt="profile_picture"/>
        <ChevronDownIcon className="w-4 h-4 text-HIGHLIGHT"/>
      </div>
    </button>
  );
};
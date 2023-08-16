import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <button onClick={handleLogin}>
      <div className="flex items-center">
        <ul className="py-7 px-3 text-TEXT-PRIMARY">Login</ul>
        <ul className="py-2 px-5 bg-HIGHLIGHT text-TEXT-SECONDARY font-bold rounded-full">Signup</ul>
      </div>
    </button>
  );
};
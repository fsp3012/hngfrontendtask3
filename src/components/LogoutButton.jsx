import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mb-3 px-4 rounded w-2/6 md:w-1/6 mx-auto"
        onClick={() => logout()}
      >
        Logout
      </button>
    )
  );
};

export default LogoutButton;

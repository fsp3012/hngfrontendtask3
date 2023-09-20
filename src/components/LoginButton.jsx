import { useAuth0 } from "@auth0/auth0-react";

import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded w-2/6 md:w-1/6 mx-auto"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    )
  );
};

export default LoginButton;

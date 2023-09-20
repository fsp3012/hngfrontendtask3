import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import GalleryWithUpload from "./components/GalleryWithUpload";
import Loading from "./components/Loader";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  return (
    <main className="flex flex-col">
      {error && <h1>Authentication Error</h1>}
      {isLoading && <Loading />}
      {isAuthenticated && !isLoading && !error && (
        <>
          <LogoutButton />
          <GalleryWithUpload />
        </>
      )}
      {!isAuthenticated && !isLoading && !error && (
        <>
          <LoginButton />
          <Gallery />
        </>
      )}
    </main>
  );
};

export default App;

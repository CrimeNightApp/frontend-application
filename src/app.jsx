import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/pageLoader";
import { CallbackPage } from "./pages/callbackPage";
import { VideosPage } from "./pages/videosPage";
import { NotFoundPage } from "./pages/notFoundPage";
import { AuthenticationGuard } from "./components/auth/authenticationGuard";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<VideosPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/admin" element={<AuthenticationGuard role="admin" component={VideosPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
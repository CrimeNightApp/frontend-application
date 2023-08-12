import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/pageLoader";
import { AuthenticationGuard } from "./components/auth/authenticationGuard";
import { AdminPage } from "./pages/adminPage";
import { CallbackPage } from "./pages/callbackPage";
import { HomePage } from "./pages/homePage";
import { NotFoundPage } from "./pages/notFoundPage";
import { ProfilePage } from "./pages/profilePage";
import { UnauthorizedPage } from "./pages/unauthorizedPage";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route
        path="/admin"
        element={<AuthenticationGuard role="admin" component={AdminPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
import React from "react";
import { Auth0Features } from "../components/auth0Features";
import { HeroBanner } from "../components/heroBanner";
import { PageLayout } from "../components/pageLayout";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <Auth0Features />
  </PageLayout>
);

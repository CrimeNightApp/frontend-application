import React from "react";
import { PageLayout } from "../components/pageLayout";

export const UnauthorizedPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          You are not authorized to visit this page.
        </h1>
      </div>
    </PageLayout>
  );
};

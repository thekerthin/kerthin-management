import React, { lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

const InitialPage = lazy(() => import("../InitialPage"));
const ListTemplates = lazy(() => import("../ListTemplates"));
const ViewTemplate = lazy(() => import("../ViewTemplate"));
const Project = lazy(() => import("../Project"));

const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Route path="/" exact component={InitialPage} />
    <Route path="/templates" exact component={ListTemplates} />
    <Route path="/templates/:id" exact component={ViewTemplate} />
    <Route path="/project" exact component={Project} />
    <Redirect to="/templates" />
  </Suspense>
);

export default Root;

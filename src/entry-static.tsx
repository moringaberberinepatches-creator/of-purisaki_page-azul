import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  context: {},
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

hydrateRoot(document.getElementById("root")!, (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
));

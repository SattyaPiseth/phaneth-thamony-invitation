// main.jsx
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { coverLoader } from "./routes/loaders.js";

const App       = lazy(() => import("./App.jsx"));
const ErrorPage = lazy(() => import("./routes/ErrorPage.jsx"));
const CoverPage = lazy(() => import("./pages/CoverPage.jsx"));
const HomePage  = lazy(() => import("./pages/HomePage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,                      // no inner Suspense needed
    errorElement: <ErrorPage />,           // ditto
    children: [
      { index: true, element: <CoverPage />, loader: coverLoader },
      { path: "home", element: <HomePage /> },
      { path: ":uuid", element: <CoverPage />, loader: coverLoader },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
    <SpeedInsights />
  </StrictMode>
);

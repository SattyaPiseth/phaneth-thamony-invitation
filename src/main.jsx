// main.jsx
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "aos/dist/aos.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { coverLoader } from "./routes/loaders.js";
import App from "./App.jsx";
import CoverPage from "./pages/CoverPage.jsx";

const ErrorPage = lazy(() => import("./routes/ErrorPage.jsx"));
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

// ---- A11y FIX: make sure #root is never aria-hidden ----
const rootEl = document.getElementById("root");
if (rootEl) {
  rootEl.removeAttribute("aria-hidden");
  rootEl.removeAttribute("data-aria-hidden");
}

// Prevent any script (modal/lightbox/anim) from putting it back
if (rootEl) {
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (
        m.type === "attributes" &&
        (m.attributeName === "aria-hidden" || m.attributeName === "data-aria-hidden")
      ) {
        rootEl.removeAttribute("aria-hidden");
        rootEl.removeAttribute("data-aria-hidden");
      }
    }
  });

  mo.observe(rootEl, {
    attributes: true,
    attributeFilter: ["aria-hidden", "data-aria-hidden"],
  });
}
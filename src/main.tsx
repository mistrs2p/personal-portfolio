import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { ThemeProvider } from "./components/ThemeProvider";
import { router } from "./routes/router";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { ThemeProvider } from "./components/ThemeProvider";
import { I18nProvider } from "./components/i18nProvider";
import "./i18n";
import { router } from "./routes/router";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
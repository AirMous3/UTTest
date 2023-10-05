import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/pages";
import { GlobalStyle } from "@/shared/styles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </BrowserRouter>,
);

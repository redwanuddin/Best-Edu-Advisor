import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Onboard from "./pages/Onboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Onboard />
  </StrictMode>
);

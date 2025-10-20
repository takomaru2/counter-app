import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp.jsx";
import "ress";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
);

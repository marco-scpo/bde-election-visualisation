import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../bde_election_results.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

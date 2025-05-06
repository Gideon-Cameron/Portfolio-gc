import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ThemeProvider } from "./context/ThemeProvider"; // ❌ Disable for now
import "./index.css";

// 👇 Render without ThemeProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

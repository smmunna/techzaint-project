import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import DarkContext from "./context/darkmode/DarkContext";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <DarkContext>
          <RouterProvider router={router} />
        </DarkContext>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

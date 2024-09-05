import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Js from "./pages/Javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <h1 style={{ color: "darkblue", textAlign: "center" }}>
        Sorry Wrong Page
      </h1>
    ),
  },
  {
    path: "Html",
    element: <Html />,
  },
  {
    path: "Css",
    element: <Css />,
  },
  {
    path: "Js",
    element: <Js />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

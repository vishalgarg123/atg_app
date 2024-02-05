import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signup from "./Components/signup.jsx";
import Signin from "./Components/Signin.jsx";
import LoggedIn from "./Components/LoggedIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Signup /> },
      { path: "/signin", element: <Signin /> },
      { path: "/loggedin", element: <LoggedIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

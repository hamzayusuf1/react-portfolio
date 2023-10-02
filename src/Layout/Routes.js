import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home/Home";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact/Contact";
import About from "../components/pages/About";
import Main from "../components/Main/Main";
// export const Main = () => {
//   return <div></div>;
// };

// export default Main;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

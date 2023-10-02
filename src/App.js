import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useState, createContext } from "react";

import { router } from "./Layout/Routes";

import "./App.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact/Contact";

export const PortContext = createContext();

function App() {
  const [nav, setNav] = useState(false);

  return (
    <PortContext.Provider value={{ nav, setNav }}>
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <RouterProvider router={router}></RouterProvider>
      </div>
    </PortContext.Provider>
  );
}

export default App;

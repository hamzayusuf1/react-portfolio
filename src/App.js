import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, createContext } from "react";

import "./App.css";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

export const PortContext = createContext();

function App() {
  const [nav, setNav] = useState(false);

  return (
    <PortContext.Provider value={{ nav, setNav }}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </PortContext.Provider>
  );
}

export default App;

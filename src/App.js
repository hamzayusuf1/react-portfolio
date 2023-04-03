import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate replace to="/home" />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

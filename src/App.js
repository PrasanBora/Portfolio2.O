import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoad(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* legacy redirects */}
          <Route path="/project" element={<Navigate to="/projects" replace />} />
          <Route path="/techstack" element={<Navigate to="/skills" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

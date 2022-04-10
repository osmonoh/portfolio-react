import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CV from "./pages/CV";

import "./style/App.scss";
import Loader from "./components/Loader";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      setShowHome(true);
    }, 7000);
  }, []);

  return (
    <div className="App ">
      {showLoader && <Loader />}
      {showHome && (
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/pages/resume" element={<Resume />} />
              <Route path="/pages/projects" element={<Projects />} />
              <Route path="/pages/contact" element={<Contact />} />
              {/* <CV /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;

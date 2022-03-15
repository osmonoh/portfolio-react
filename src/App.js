import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CV from "./pages/CV";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pages/resume" element={<Resume />} />
          <Route path="/pages/projects" element={<Projects />} />
          <Route path="/pages/contact" element={<Contact />} />

          {/* <CV /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

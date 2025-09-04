import React from "react";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import University from "./Pages/University";
import Courses from "./Pages/Courses";
import Works from "./Pages/works";
import Story from "./Pages/Story";
import Guide from "./Pages/Guide";
import ScrollToTop from "./components/scrollToTop";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="bg-blue-50">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/universities" element={<University />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/works" element={<Works />} />
        <Route path="/story" element={<Story />} />
        <Route path="/admission" element={<Guide />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App;

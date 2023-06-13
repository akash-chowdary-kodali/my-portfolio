import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { Expertise } from "../pages/Expertise";
import { Background } from "../pages/Background";
import { AnimatePresence } from "framer-motion";
import NavBar from "../navbar/nav";
import { Greeting} from "../pages/greeting";
// import {ScrollToTop} from './scrolltoTop';

export const AnimatedRoutes = () => {
  // eslint-disable-next-line
  // const pagelocation = useLocation();
  return (
    <div id="sectionscroll">
      <section>
        <Greeting />
      </section>
      <NavBar />
      <section id="afternav">
        {/* <ScrollToTop /> */}
        <AnimatePresence mode="wait">
          <Routes location={useLocation()} key={useLocation().pathname}>
            <Route exact path="/" element={<About />} />
            <Route path="/home" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/skills" element={<Background />} />
            {/* <Route path="/Education" element={<Edu/>}/> */}
          </Routes>
        </AnimatePresence>
      </section>
    </div>
  );
};

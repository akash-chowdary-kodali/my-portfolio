import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "./About";
import { Expertise } from "./Expertise";
import { Background } from "./Background";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  // eslint-disable-next-line
  // const pagelocation = useLocation();
  return (
    <div>
    <AnimatePresence mode="wait">
      <Routes  location={useLocation()} key={useLocation().pathname}>
        <Route exact path="/" element={<About />} />
        <Route path="/home" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/skills" element={<Background />} />
        {/* <Route path="/Education" element={<Edu/>}/> */}
      </Routes>
    </AnimatePresence></div>
  );
}

import "./App.css";
import { React } from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import {Leftnav} from "./nav-bar/left-nav";
import Navbar from "./nav-bar/nav";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Edu } from "./pages/Education";

// import ScrollToTop from "./pages/scrolltoTop";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Leftnav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="projects" element={<Projects/>} />
          <Route exact path="skills" element={<Skills/>} />
          <Route exact path="edu" element={<Edu/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

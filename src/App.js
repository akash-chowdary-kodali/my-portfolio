import "./App.css";
import {React} from "react";
import NavBar from "./nav-bar/nav";
import { Routes,Route, HashRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Edu } from "./pages/Education";
import ScrollToTop from "./pages/scrolltoTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Education" element={<Edu/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

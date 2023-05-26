import "./App.css";
import {React} from "react";
import NavBar from "./nav-bar/nav";
import { Routes,Route, HashRouter as Router } from "react-router-dom";
import { Home } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Background } from "./pages/Background";
// import { Edu } from "./pages/Education";
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
          <Route path="/expertise" element={<Expertise/>}/>
          <Route path="/skills" element={<Background/>}/>
          {/* <Route path="/Education" element={<Edu/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

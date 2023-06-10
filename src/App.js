import "./App.css";
import {React} from "react";
import NavBar from "./components/navbar/nav";
import { Routes,Route, HashRouter as Router } from "react-router-dom";
import { About } from "./components/pages/About";
import { Expertise } from "./components/pages/Expertise";
import { Background } from "./components/pages/Background";
// import { Edu } from "./pages/Education";
import ScrollToTop from "./components/pages/scrolltoTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route exact path = "/" element = {<About/>}/>
          <Route path="/home" element={<About/>}/>
          <Route path="/expertise" element={<Expertise/>}/>
          <Route path="/skills" element={<Background/>}/>
          {/* <Route path="/Education" element={<Edu/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import {React} from "react";
import NavBar from "./components/navbar/nav";
import { HashRouter as Router} from "react-router-dom";

// import { Edu } from "./pages/Education";
// import ScrollToTop from "./components/pages/scrolltoTop";
// import{AnimatedRoutes} from "./components/pages/AnimatedRoutes";
import {MainPage} from "./components/pages/Mainpage";
function App() {
  
  return (
    <div>
      <Router>
        <MainPage/>
        {/* <AnimatedRoutes/> */}
        {/* <ScrollToTop/> */}
      </Router>
    </div>
  );
}

export default App;

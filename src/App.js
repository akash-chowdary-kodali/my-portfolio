import "./App.css";
import {React} from "react";
// import NavBar from "./components/navbar/nav";
import { AnimatedRoutes } from "./functions/AnimatedRoutes";
import { HashRouter as Router} from "react-router-dom";
function App() {
  
  return (
    <div>
      <Router>
        <AnimatedRoutes/>
        {/* <AnimatedRoutes/> */}
        {/* <ScrollToTop/> */}
      </Router>
    </div>
  );
}

export default App;

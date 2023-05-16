import "./App.css";
import NavBar from "./nav-bar/nav";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Edu } from "./pages/Education";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Education" element={<Edu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

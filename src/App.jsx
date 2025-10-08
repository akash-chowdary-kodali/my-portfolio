import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Expertise";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import NavBar from "./components/navbar/nav";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-200">
          <NavBar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={
                  <div className="py-16">
                    <About />
                  </div>
                }
              />
              <Route
                path="/expertise"
                element={
                  <div className="py-16">
                    <Skills />
                  </div>
                }
              />
              <Route
                path="/projects"
                element={
                  <div className="py-16">
                    <Projects />
                  </div>
                }
              />
              <Route
                path="/experience"
                element={
                  <div className="py-16">
                    <Experience />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="py-16">
                    <Contact />
                  </div>
                }
              />
            </Routes>
          </main>
          <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>© 2025 Akash Chowdary Kodali. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

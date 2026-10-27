import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Expertise";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import NavBar from "./components/navbar/nav";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RESUME_URL } from "./constants/links";

const footerLink =
  "hover:text-blue-600 dark:hover:text-blue-400 hover:underline";

const NotFound = () => (
  <div className="py-24 text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Page not found
    </h1>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      That page does not exist.
    </p>
    <Link
      to="/"
      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
    >
      Back to home
    </Link>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-200">
          <NavBar />
          <main
            id="main-content"
            tabIndex={-1}
            className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 focus:outline-none">
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
              <nav
                aria-label="Footer"
                className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4"
              >
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  Resume
                </a>
                <a
                  href="https://github.com/akash-chowdary-kodali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/akashkodali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  LinkedIn
                </a>
                <a href="mailto:akodali.dev@gmail.com" className={footerLink}>
                  Email
                </a>
              </nav>
              <p>&copy; 2026 Akash Chowdary Kodali. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

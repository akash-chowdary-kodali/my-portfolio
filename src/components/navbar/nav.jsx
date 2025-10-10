import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

function NavBar() {
  const [toggle, settoggle] = useState(false);
  const menuButtonRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  const handletoggle = () => {
    settoggle(!toggle);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && toggle) {
        settoggle(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const handleMenuKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handletoggle();
    }
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="fixed -top-full left-4 z-50 bg-text-light dark:bg-text-dark text-background-light dark:text-background-dark px-4 py-2 rounded focus:top-4 transition-all duration-200"
      >
        Skip to main content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-border-light dark:border-border-dark"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center"
                aria-label="Akash Kodali - Home"
              >
                <div className="text-xl font-bold text-text-light dark:text-text-dark hover:opacity-70 transition-opacity duration-200">
                  AK
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-text-light dark:text-text-dark hover:opacity-70 px-3 py-2 text-sm font-medium transition-opacity duration-200"
              >
                About
              </Link>
              <Link
                to="/expertise"
                className="text-text-light dark:text-text-dark hover:opacity-70 px-3 py-2 text-sm font-medium transition-opacity duration-200"
              >
                Expertise
              </Link>
              <Link
                to="/experience"
                className="text-text-light dark:text-text-dark hover:opacity-70 px-3 py-2 text-sm font-medium transition-opacity duration-200"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-text-light dark:text-text-dark hover:opacity-70 px-3 py-2 text-sm font-medium transition-opacity duration-200"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-text-light dark:text-text-dark hover:opacity-70 px-3 py-2 text-sm font-medium transition-opacity duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Right side - Theme toggle, Resume, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-text-light dark:text-text-dark hover:opacity-70 transition-opacity duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1hBOsNkfOPhvWonWKh4DHIDKj5G1S-unP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 border border-text-light dark:border-text-dark text-text-light dark:text-text-dark hover:bg-text-light hover:text-background-light dark:hover:bg-text-dark dark:hover:text-background-dark text-sm font-medium rounded transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume
              </a>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  ref={menuButtonRef}
                  onClick={handletoggle}
                  onKeyDown={handleMenuKeyDown}
                  aria-expanded={toggle}
                  aria-controls="mobile-menu"
                  aria-label={
                    toggle ? "Close navigation menu" : "Open navigation menu"
                  }
                  className="inline-flex items-center justify-center p-2 rounded text-text-light dark:text-text-dark hover:opacity-70 transition-opacity duration-200"
                >
                  <span className="sr-only">
                    {toggle ? "Close main menu" : "Open main menu"}
                  </span>
                  <svg
                    className={toggle ? "hidden" : "block"}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={toggle ? "block" : "hidden"}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={toggle ? "md:hidden block" : "md:hidden hidden"}
          role="menu"
          aria-hidden={!toggle}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
            <Link
              to="/about"
              onClick={() => settoggle(false)}
              className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200"
            >
              About
            </Link>
            <Link
              to="/expertise"
              onClick={() => settoggle(false)}
              className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200"
            >
              Expertise
            </Link>
            <Link
              to="/experience"
              onClick={() => settoggle(false)}
              className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={() => settoggle(false)}
              className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => settoggle(false)}
              className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200"
            >
              Contact
            </Link>
            <div className="border-t border-border-light dark:border-border-dark pt-4">
              <a
                href="https://drive.google.com/file/d/1hBOsNkfOPhvWonWKh4DHIDKj5G1S-unP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light dark:text-text-dark hover:opacity-70 block px-3 py-2 rounded text-base font-medium transition-opacity duration-200 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

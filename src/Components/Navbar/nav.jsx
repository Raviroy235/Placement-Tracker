import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

/**
 * Navigation bar
 * @param {{ userData?: { name?: string } }} props
 */
function Nav({ userData = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isSignedIn = Boolean(userData?.name);

  return (
    <nav className="nav">
      <div className="nav-container">
        {!isSignedIn ? (
          /* ---------- Signed‑out view ---------- */
          <div className="signup-btn-container">
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </div>
        ) : (
          /* ---------- Signed‑in view ---------- */
          <>
            <div className="home-nav">
              <ul className="nav-links">
                <li>
                  <Link
                    to="/myprofile"
                    className={location.pathname === "/myprofile" ? "active" : ""}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/opportunities"
                    className={location.pathname === "/opportunities" ? "active" : ""}
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className={location.pathname === "/feedback" ? "active" : ""}
                  >
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile menu hamburger */}
            <button
              className="menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            {/* Slide‑out side panel */}
            <div className={`sidepanel ${isOpen ? "open" : ""}`}>
              <button className="closebtn" onClick={toggleMenu}>
                &times;
              </button>
              <Link to="/myprofile" onClick={toggleMenu}>
                My Profile
              </Link>
              <Link to="/opportunities" onClick={toggleMenu}>
                Opportunities
              </Link>
              <Link to="/feedback" onClick={toggleMenu}>
                Feedback
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;

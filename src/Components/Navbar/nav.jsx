import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from '../Context/UserContext';
import "./nav.css";

function Nav() {
  const { userData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {!userData.name ? (
          <div className="signup-btn-container">
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        ) : (
          <>
            <div className="home-nav">
              <ul className="nav-links">
                <li><Link to="/myprofile" className={location.pathname === "/myprofile" ? "active" : ""}>My Profile</Link></li>
                <li><Link to="/opportunities" className={location.pathname === "/opportunities" ? "active" : ""}>Opportunities</Link></li>
                <li><Link to="/feedback" className={location.pathname === "/feedback" ? "active" : ""}>Feedback</Link></li>
                <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
              </ul>
            </div>

            <div className="menu-btn" onClick={toggleMenu}>☰</div>

            <div className={`sidepanel ${isOpen ? "open" : ""}`}>
              <button className="closebtn" onClick={toggleMenu}>&times;</button>
              <Link to="/myprofile" onClick={toggleMenu}>My Profile</Link>
              <Link to="/opportunities" onClick={toggleMenu}>Opportunities</Link>
              <Link to="/feedback" onClick={toggleMenu}>Feedback</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;

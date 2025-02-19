import { useState } from 'react';
import './nav.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [count, setCount] = useState(0);

  function openNav() {
    document.getElementById("mysidepanel").style.height = "100%";
    
  }

  function closeNav() {
    document.getElementById("mysidepanel").style.height = "0%";
   
  }

  return (
    <>
      <nav className='nav'>
        <div className='navdiv'>
          <img id="logoimg" src={logo} alt="Logo"/>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <div style={{display: "flex", flex: "wrap"}}>
          <ul className='list'>
            <li style={{listStyle: "none"}}><Link style={{color: "#333399"}} to="/myprofile" id='linkbutt'>My Profile</Link></li>
            <li style={{listStyle: "none"}}><Link style={{color: "#333399"}} to="#">Services</Link></li>
            <li style={{listStyle: "none"}}><Link style={{color: "#333399"}} to="/Company">Company</Link></li>
            <li style={{listStyle: "none"}}><Link style={{color: "#333399"}} to="/feedback">Feedback</Link></li>
            <li style={{listStyle: "none"}}><Link style={{color: "#333399"}} to="">Notifications</Link></li>
          </ul>
          <div id='signupdiv'>
          <button id='signupbutt'>Sign up</button>
          </div>
          </div>
          </div>

          {/* It's only for responsive mobile */}
          <div id='mysidepanel' className='sidepanel'>
            <div id='elements'>
            <Link to="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
            <p><Link to='/myprofile'>My Profile</Link></p>
            <p><Link to='/'>Services</Link></p>
            <p><Link to='/Company'>Company</Link></p>
            <p><Link to='/feedback'>Feedback</Link></p>
            <p><Link to=''>Notifications</Link></p>
            </div>
          </div>
          <span id="menu" style={{ fontSize: '35px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        </div>
      </nav>
      {/* <button id="signresp">Sign In</button> */}
    </>
  );
}

export default Nav;

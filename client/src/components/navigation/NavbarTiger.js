import React from 'react';
import { Link } from 'react-router-dom';
//import AboutUs from '../index/AboutUs';
import NavbarFrontpage from './NavbarFrontpage'
import LogoutButton from '../auth/Logout';



const NavbarTiger = (props) => {

  if (props.userInSession) {
    return (
      <nav className="nav-style">
        <div className="nav-wrapper-left">
          <Link to="/tigerView" className="homeLink" style={{ textDecoration: 'none' }}>
            <img src="../../images/logo2Gobuddy.png" className="logo-small" />
          </Link>
          <h2>Welcome, {props.userInSession.username} !</h2>
        </div>
        <div className="nav-link-wrapper">
          <ul>
            {/* <Link to="/mailbox">Mailbox</Link> */}
            {/* <Link to="/logout">Logout</Link> */}

            <li><Link to='/about'>About Us</Link></li>
            <li>
              <LogoutButton logInTheUser={props.logInTheUser}>Logout</LogoutButton>
            </li>
          </ul>
        </div>

      </nav>)
  }

  else {
    return (
      <nav> <p>Still no logged in user, sorry!</p>
        <NavbarFrontpage />
      </nav>
    )
  }
}

export default NavbarTiger;



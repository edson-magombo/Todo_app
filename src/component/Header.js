import React from 'react';
import { Link } from 'react-router-dom';
// import  HelpOutLineIcon from "@material-ui/icon/HelpOutLine";
// import HelpOutlineIcon from "./@material-ui/icon/HelpOutline";
import "./Header.css";
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';
import reducer from './reducer';

function Header() {
  const [{user}]= useStateValue();

  return (
    <div className="header">
        <div className= "header_log">
            <img src="https://www.cc.ac.mw/images/UnimaLogo.png" 
            alt="" />
            </div>
        <div className= "header_nameANDmenu">
        <div className= "header_name">
      <h1>Campus Maintenance Management System</h1>
      </div>
      <div className = "menu">
        <Link className = "link" to = "/">HOME</Link>
        <Link className = "link" to = "/">INQUIRES</Link>
        <Link className = "link" to = "/">ABOUT US</Link>
      </div>
      </div>
      <div className= "header_support">
        {/* <HelpOutLineIcon /> */}
        <Link className ="link" to ="/"> Support</Link>
        <div className = "name">
          <h6>{user.displayName} <button className= "button" onClick={(e)=> {
            e.preventDefault();
            auth.signOut(); }}>LogOut</button></h6>
        </div>
        
          
      </div>
    </div>
  );
}

export default Header;



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.8.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
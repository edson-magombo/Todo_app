import React from 'react';
import { Link } from 'react-router-dom';
// import  HelpOutLineIcon from "@material-ui/icon/HelpOutLine";
// import HelpOutlineIcon from "./@material-ui/icon/HelpOutline";
import "./Header.css";
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

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
        <Link className = "link" to = "/Inquiry">INQUIRES</Link>
        <Link className = "link" to = "/">ABOUT US</Link>
      </div>
      </div>
      <div className= "header_support">
        
        
        <div className = "name">
          <h6>{user.displayName} <button className= "button" onClick={(e)=> {
            e.preventDefault();
            auth.signOut() }}>LogOut</button></h6>
        </div>
        
          
      </div>
    </div>
  );
}

export default Header;


 
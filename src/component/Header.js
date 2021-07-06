import React from 'react';
import HelpOutlineIcon from "./@material-ui/icons/HelpOutlineIcon";
import "./Header.css";

function Header() {
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
        <h4>HOME</h4>
        <h4>INQUIRES</h4>
        <h4>ABOUT US</h4>
      </div>
      </div>
      <div className= "header_support">
        <h4>
          <HelpOutlineIcon />
          Support</h4>
      </div>
    </div>
  );
}

export default Header;
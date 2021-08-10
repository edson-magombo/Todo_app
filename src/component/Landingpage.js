import React from 'react';
import {useStateValue} from './StateProvider'
// import { Link } from 'react-router-dom';
import "./Landingpage.css";
import { auth, provider } from '../firebase';
// import 'firebase/firestore';
import {actionTypes} from './reducer'
function Landingpage() {
const [state, dispatch] = useStateValue();
    const signIn = () =>{
      auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error)=>
        alert(error.message)
      );

    }    
    return (
    <div className="landingpage">
      <nav className="Navbar">
         <div className="container">
            <div className= "landingpage_log">
              <img src="https://www.cc.ac.mw/images/UnimaLogo.png" 
              alt="" />
            </div>

            <div className= "header_name">
              <h1>Campus Maintenance Management System</h1>
           </div>
          </div>
      </nav>
      {/* <p> explaining about the management system</p> */}
      <div className="services">
          <div className="services-grid">
            <div className="signin">
              <h1>Sign up to start the sessions</h1>
              <button className="signup-btn" onClick= {signIn}>Sign In with Google</button>
            </div>
            
            <div className="services-list">
              <h1>What we offer</h1>
              <ul>
                <li>PLUMBING</li>
                <li>CARPENTRY</li>
                <li>FIX ELECTRICS</li>
                <li>CLEANING</li>
                <li>BUILDING</li>
              </ul>
            </div>
          </div>
      </div>
  </div>
        
    )
}

export default Landingpage;

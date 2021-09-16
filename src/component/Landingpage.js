 import React, {useState, useEffect} from 'react';
import {useStateValue} from './StateProvider'
import "./Landingpage.css";
import {makeStyles} from '@material-ui/core/styles';
import { auth, provider } from '../firebase';
import {actionTypes} from './reducer';
import Modal from '@material-ui/core/Modal';
import {Button, Input} from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Landingpage() {
const classes = useStyles();
const [modalStyle]= useState(getModalStyle);
const [state, dispatch] = useStateValue();
const [user, setUser] = useState(null);
const [open, setOpen] = useState(false);
const [openSignIn, setOpenSignIn]= useState('');
const [displayName, setDisplayName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

useEffect(() => {

   const unsubscribe = auth.onAuthStateChanged((authUser) =>{
     if(authUser){
      //user logged
console.log(authUser);
setUser(authUser);
if(authUser.displayName){
  //don't update username
}else{
  //if we just created 1
  return authUser.updateProfile({
    displayName:displayName,
  });
}
     }
     else{
       //no user
       setUser(null);
     } 
   })
return ()=>{
  //perform cleanup
  unsubscribe();
}
}, [user, displayName])

    const signUp = (event) =>{
      event.preventDefault();
      auth
      .createUserWithEmailAndPassword (email, password) 
      .then((authUser)=>{
        authUser.user.updateProfile({
          displayName:displayName,
        });

      })
      .catch((error)=> alert(error.message));
      setOpen(false);
    }   
    const signIn = (event)=>{
      event.preventDefault();
      auth
      .signInWithEmailAndPassword(email, password)
      .catch((error)=> alert(error.message))
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error)=>
        alert(error.message)
      );
      setOpenSignIn(false);

    }
    
    
    return (
    <div className="landingpage">
        {/* sign up modal */}
      <Modal 
        open={open}
        onClose={()=> setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className="modalsignup">
        <nav className="modalNavbar">
         <div className="modalcontainer">
            <div className= "landingpage_log">
              <img src="https://www.cc.ac.mw/images/UnimaLogo.png" 
              alt="" />
            </div>

            <div className= "header_name">
              <h3>Maintenance System</h3>
           </div>
          </div>
      </nav>
      
      <Input placeholder="username"
      type="text"
      value={displayName}
      onChange={(e)=>setDisplayName(e.target.value)} /> 

      <Input placeholder="email"
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)} /> 

      <Input placeholder="password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)} /> 

      <Button onClick={signUp}>Register</Button>
      
      </form>
    </div>
      </Modal>
      {/* sign in modal */}
      <Modal 
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className="modalsignup">
        <nav className="modalNavbar">
         <div className="modalcontainer">
            <div className= "landingpage_log">
              <img src="https://www.cc.ac.mw/images/UnimaLogo.png" 
              alt="" />
            </div>

            <div className= "header_name">
              <h3>Maintenance System</h3>
           </div>
          </div>
      </nav> 

      <Input placeholder="email"
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)} /> 

      <Input placeholder="password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)} /> 

      <Button onClick={signIn}>Login</Button>
      
      </form>
    </div>
      </Modal>

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
              <div className="ctas">
              <Button className="signup-btn" onClick = {()=>setOpenSignIn(true)}>Sign In</Button>
              <Button className="signup-btn" onClick = {()=>setOpen(true)}>Register</Button>
              </div> 
            </div>
            
            </div>
      </div>
  </div>
        
    )
}

export default Landingpage;

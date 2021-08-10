import React, {useState, useEffect } from 'react'
import './App.css';
import Header from './component/Header';
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landingpage from './component/Landingpage';
import Inquiry from './component/Inquiry';
import  db   from "./firebase";
import { useStateValue } from './component/StateProvider';


function App(){
  const [{user}, setUser] = useStateValue();
  const [inquirie, setInquirie] = useState([
    { 
      username: "Edson Magombo",
      message: "its possible",
      timestamp: "2021-03-40  08:09",
      imageUrl:"https://www.unima.ac.mw/images/slider/campus/campus4.jpg"

    },
    {
      username: "chimutu stevie",
      message: "its REALLY WORKING",
      timestamp: "2021-03-40  08:09",
      imageUrl:"https://www.unima.ac.mw/images/slider/campus/campus4.jpg"
    }
  ]);
  //EFFECT --> Runs a piece of code on a specific condition 
useEffect(() => {
db.collection("inquiries").onSnapshot(snapshot =>{
  setInquirie(
    snapshot.docs.map((doc) => doc.data()));
  
  })
  
}, []); 
console.log("MESSAGES>>>>" , inquirie);

return (
    <div className="App">
      <Router>
         { !user ? (
           <Landingpage />
         ): (
           <> 
           
      <Header />
      <Switch>
        <Route path ="/Inquiry" >
        
        <Footer />
          </Route>
          
      </Switch>
    <div>
      {
      inquirie.map((inquiry) =>(
      <Inquiry
      username={inquiry.username} 
      message={inquiry.message}
      imageUrl={inquiry.imageUrl}
      timestamp ={inquiry.timestamp} 
      // key = {id}
      />
      ))}
      
      <Inquiry username = "Clement" message= "We need your fast assistance here in Chirunga hostel" 
      imageUrl="https://www.unima.ac.mw/images/slider/campus/campus4.jpg"
      timestamp= "2021-09-21 08:05" />
     
       </div>
      <Footer />
      </>
      )}
      </Router>

    </div>
  );
}

export default App;

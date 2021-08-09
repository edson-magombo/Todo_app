import React, {useState, useEffect } from 'react'
import './App.css';
import Header from './component/Header';
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landingpage from './component/Landingpage';
import Inquiry from './component/Inquiry';
import  db   from "./firebase";


function App(){
  const [user, setUser] = useState('null');
  const [inquirie, setInquirie] = useState([
    { 
      username: "Edson Magombo",
      message: "its possible",
      timestamp: "2021-03-40  08:09",
      imageUrl:"https://lh3.googleusercontent.com/a-/AOh14GipjoriEK-uqJVAZLR5Gcp9-XhzP5sniGmk1Se0=s96-c"

    },
    {
      username: "chimutu stevie",
      message: "its REALLY WORKING",
      timestamp: "2021-03-40  08:09",
      imageUrl:"https://lh3.googleusercontent.com/a-/AOh14GipjoriEK-uqJVAZLR5Gcp9-XhzP5sniGmk1Se0=s96-c"
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
      
      <Inquiry username = "Ruth" message= "We need your fast assistance here in makata hostel" 
      imageUrl="https://lh3.googleusercontent.com/a-/AOh14GipjoriEK-uqJVAZLR5Gcp9-XhzP5sniGmk1Se0=s96-c"
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

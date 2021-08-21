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
  const [{user}, setUser] = useStateValue('');
  const [inquiries, setInquiries] = useState([]);
  //EFFECT --> Runs a piece of code on a specific condition 
useEffect(() => {
db.collection("inquiries").onSnapshot(snapshot =>{
  setInquiries(
    snapshot.docs.map((doc) =>  ({
      id: doc.id,
      inquiry: doc.data()
    })));
  
  })
  
}, []); 
console.log("MESSAGES>>>>" , inquiries);

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
        
        {/* <Footer /> */}
          </Route>
          
      </Switch>
    <div className= "inquiry">
      {
      inquiries.map(({id, inquiry}) =>(
      <Inquiry
      key= {id}
      displayName={inquiry.displayName} 
      message={inquiry.message}
      imageURL={inquiry.imageURL}
      // timestamp ={inquiry.timestamp} 
    
      />
      ))}
      
      {/* <Inquiry displayName = "Clement" message= "We need your fast assistance here in Chirunga hostel" 
      imageURL="https://previews.123rf.com/images/michaeljung/michaeljung1202/michaeljung120200116/12431976-happy-blue-collar-worker-working-in-workshop.jpg"
      timestamp= "2021-09-21 08:05" />
      */}
     <div>
      <Footer />
      </div>
       </div>
       
      </>
      )}
      </Router>
      

    </div>
  );
}

export default App;

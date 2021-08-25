import React, {useState, useEffect } from 'react';
import "./Inquiry.css";
import Post from "./Post" 
import  db   from "../firebase"; 
function Inquiry() {
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
        
        <div>
        {
          inquiries.map(({id, inquiry})=>(
            <Post 
            key={id}
            displayName={inquiry.displayName}
            message={inquiry.message}
            imageURL={inquiry.imageURL}
            // timestamp={inquiry.timestamp}
            />
          ))
        }
        </div>
    )
}

export default Inquiry;
   
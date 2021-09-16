import React, {useState, useEffect } from 'react';
import "./AdminPage.css";
import Post from "./Post" 
import  db   from "../firebase"; 
import {moment, note} from 'moment';
import ImageUpload from './ImageUpload';
import { useStateValue } from './StateProvider';
function AdminPage() {
  const [{user}]= useStateValue(); 
    const [inquiries, setInquiries] = useState([]);
  //EFFECT --> Runs a piece of code on a specific condition 
useEffect(() => {
db.collection("inquiries")
.orderBy("timestamp", "desc") 
.onSnapshot(snapshot =>{
  setInquiries(
    snapshot.docs.map((doc) =>  ({
      id: doc.id,
      inquiry: doc.data()
    })));
  
  })
}, []); 
console.log("MESSAGES>>>>" , inquiries);


return (
       <div className="inquiries1">   
          {/* <div className="upload">
            <ImageUpload displayName={user.displayName} /> 
/             </div> */}
             <div className="inquiries">
        {
          inquiries.map(({id, inquiry})=>(
            <Post 
            key={id}
            displayName={inquiry.displayName}
            message={inquiry.message}
            imageURL={inquiry.imageURL}
            timestamp={inquiry.timestamp}
            />
          ))
        }</div>


    
        </div>
    )
}

export default AdminPage;
   
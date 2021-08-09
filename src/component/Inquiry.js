import React from 'react';
import "./Inquiry.css";
import Avatar  from "@material-ui/core/Avatar"; 
function Inquiry({username, timestamp, imageUrl, message}) {
   
    return (
        <div className = "inquiry">
             {/* image */}
             <div className = "inquiry_header">
             <Avatar className= "avatar" src="/static/image/avatar/1.png" 
            alt={username} />
            
            {/* header + avatar + username */}
         
            <h3>{username}</h3>
            <h5 className= "time">{timestamp}</h5>
            </div>
             {/* image */}
             <img className= "image" src={imageUrl} 
            alt="" />
           
            {/* inquiry */}
            <h3 className = "message">{message}</h3>
        </div>
    )
}

export default Inquiry;
   
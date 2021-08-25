import React from 'react';
import Avatar  from "@material-ui/core/Avatar";

function Post({displayName, timestamp, imageURL, message}) {
    return (
        
            <div className = "inquiry">
            {/* image */}
             <div className = "inquiry_header">
             <Avatar className= "avatar" src="/static/image/avatar/1.png" 
            alt={displayName} />
            
            {/* header + avatar + username */}
         
            <h3>{displayName}</h3>
            <h5 className= "time">{timestamp}</h5>
            </div>
             {/* image */}
             <img className= "image" src={imageURL} 
            alt="" />
           
            {/* inquiry */}
            <h3 className = "message">{message}</h3>
        </div>
            
        
    )
}

export default Post;

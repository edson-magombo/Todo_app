 import {useState} from 'react';
 import { Button } from '@material-ui/core'
import { storage} from '../firebase';
// import firebase from 'firebase';
import  db   from "../firebase";

function ImageUpload({displayName} ) {
    const [image, setImage] = useState(null);
    // const [url, setUrl]= useState(""); 
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('');
    
     const handleChange = (e)=>{
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }; 
    const handleUpload = ()=>{
    const uploadTask = storage.ref(`images/${image.name}`).put(image); 
        uploadTask.on(
            "state_changed", 
            (snapshot)=>{
                //progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error)=>{
                console.log(error);
                alert(error.message);
            }, 
            ()=>{
                //complete fn
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                  db.collection("inquiries").add({
                      timestamp:Date.now(), 
                  //   timestamp: firebase.firestore.FieldValue.serveTimestamp(),
                      message:message,
                      imageURL: url,
                      displayName:displayName, 
                  });
                  setProgress(0);
                  setMessage("");
                  setImage(null);
                  
                });
            }
        )
    }
    return (
        < div className= "imageupload">

            <h1>
                You can send your inquiries now!
            </h1>

        <progress className="imageupload_progress" value={progress} max="100" />
            <input type="text" placeholder="Enter your message..."onChange={event => setMessage(event.target.value)} value = {message} />
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Send</Button>
        
 
        </div>
    )
}

export default ImageUpload;
 
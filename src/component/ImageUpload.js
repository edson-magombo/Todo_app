 import {useState} from 'react';
 import { Button } from '@material-ui/core'
import { storage} from '../firebase';
import firebase from 'firebase';
import  db   from "../firebase";
import './Imageupload.css'

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
                    // timestamp: firebase.firestore.FieldValue.serveTimestamp(),
                      message:message,
                      imageURL: url,
                      displayName:displayName, 
                  });
                  setProgress(0);
                  setMessage("");
                  setImage("");
                  
                });
            }
        )
    }
    return (
        < div className= "imageupload">
             <progress className="imageupload_progress" value={progress} max="100" />
             <h5>
                 How may we be of assistance?
             </h5>
             <textarea type="text" placeholder="Description..."onChange={event => setMessage(event.target.value)} value = {message} />
             <h5>Would you like to attach a photo?</h5>
             <input type="file" onChange={handleChange}/>
             <br/>
            <Button onClick={handleUpload} value="Go!">Report</Button>
        
 
        </div>
    )
}

export default ImageUpload;
 
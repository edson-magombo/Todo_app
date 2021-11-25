import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, Input, InputLabel, FormControl} from "@material-ui/core";
import Todo from "./Todo"
import db from "./firebase";
import firebase from "firebase"

function App(){
const [todos, setTodos]= useState([]);
 const [input, setInput] = useState('');
 console.log("nnnk",  input);

 useEffect(() => {
   db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot =>{ 
       setTodos(snapshot.docs.map(doc=>
        ({id:doc.id, todo:doc.data().todo})))
        
     })
   
 
 }, [input])
 const addTodo = (event)=>{
  event.preventDefault();
  db.collection("todos").add({
    todo:input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  setTodos([...todos, input]); 
  setInput('');  
  }

return (
  // BEM CONVERTION OF className NAMING
    <div className="app">
      <center>
      <h1 >Let's build a todo app</h1 >
      <form>
      <FormControl>
      <InputLabel>Write a Todo</InputLabel>
      <Input  value={input} onChange={event=> {
        return setInput(event.target.value);
      }}/>
      </FormControl>
      <Button type="submit" disabled={!input} color="primary" variant="contained" onClick={addTodo}>Add Todo</Button>
      </form>
      <p>{todos.map(todo=>(
     <Todo todo={todo} />
      ))
      }</p>
      </center>
    </div>
  );
}

export default App;

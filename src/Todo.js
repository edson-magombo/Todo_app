import React from 'react'
import "./Todo.css"
import db from "./firebase"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { ListItem , List, ListItemText} from '@material-ui/core'
function Todo(props) {

    return (
        <div className="todo">
            <center>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary ="" /> 
                </ListItem>
                <DeleteForeverIcon className="delete" onClick={event=>{
                    db.collection('todos').doc(props.todo.id).delete()}}/>
            </List>
            </center>  
        </div>
    )
}

export default Todo

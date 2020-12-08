import React, { useState, useContext, useEffect } from "react";
import Store from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import EditTodo from './EditTodo'
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography
} from "@material-ui/core";

const TodoList = () => {
  const { state:{ headers, baseUrl}, dispatch } = useContext(Store);
  const [open, setOpen] = useState(false);

  const [curTodo, setCurTodo] = useState("");
  const [curTodoId, setCurTodoId] = useState(null);
  const [todos, setTodos] = useState([]);
  const handleOpen = (id) => {
    setCurTodoId(id);
    setCurTodo(todos[id])
    setOpen(true);
  };

  
  const handleEdit = () => {
    setOpen(false)
    todos[curTodoId] = curTodoId
    fetch({
      method: 'PUT',
      url: `${baseUrl}/todos`,
      headers,
      body: JSON.stringify(todos),
    })
    setTodos(todos);
    setCurTodo("")
    setCurTodoId(null)
  }
  
  const handleClose = () =>{
    setOpen(false);
  }

  
  
  useEffect(()=>{
    fetch(`${baseUrl}/todos`).then(res=>res.json()).then(setTodos)
  },[baseUrl])

  let count = todos.length;
  let comment;
  if (count === 0) {
    comment = "So when you are free, start another work to get tired!";
  } else {
    comment = "";
  }

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Todo List ({count})</Typography>
          <Typography>{comment}</Typography>
          <br />
          <div>
            <List>
              {todos.map((t, index) => (
                <ListItem divider key={t}>
                  <ListItemText primary={t} />
                  <ListItemSecondaryAction>
                  <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={()=>handleOpen(index)}
                    >
                      <EditIcon  color="action"/>
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch({ type: "DELETE", payload: t })}
                    >
                      <DeleteIcon color="secondary"/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
      
      <EditTodo open ={open} handleClose={handleClose} handleEdit={handleEdit} curTodoValue={curTodo} setCurTodo={setCurTodo}/>
    </div>
  );
};
export default TodoList;

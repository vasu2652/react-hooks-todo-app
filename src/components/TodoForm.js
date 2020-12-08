import React, { useState, useContext } from "react";
import { Box, IconButton, TextField } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Store from "../context";
const TodoForm = () => {
  const { state, dispatch } = useContext(Store);
  const [todo, setTodo] = useState("");
  
  const handleTodoChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmitForm = e => {
    if (e.keyCode === 13) handleTodoAdd();
  };

  const handleTodoAdd = e => {
    dispatch({ type: "ADD_TODO", payload: todo });
    fetch({
      url: `${state.baseUrl}/todos`,
      method: "POST",
      headers: state.headers,
      body: JSON.stringify(todo)
    });
    setTodo("");
  };

  return (
    <Box container spacing={0} display="flex" justifyContent="center">
      <Box item xs={12} sm={6} flexGrow={2}>
        <br />
        <TextField
          fullWidth
          id="standart-basic"
          label="Enter new todo"
          value={todo}
          onChange={handleTodoChange}
          onKeyUp={handleSubmitForm}
        />
      </Box>
      <Box item xs={12} sm={2}>
        <br />
        <br />
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={handleTodoAdd}
        >
          <PostAddIcon color="action"/>
        </IconButton>
      </Box>
    </Box>
  );
};
export default TodoForm;

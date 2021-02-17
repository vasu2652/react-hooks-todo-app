import { Box, Button, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/reducers/todo';

const TodoApp = (props)=>{
    const [text, setText] = useState("");
    useEffect(()=>{
        props.fetchTodos();
    },[])
    return (
        <Box display="flex" flexDirection="column"  >
            <Box alignSelf="center">
                <TextField value={text} onChange={(e)=>setText(e.target.value)}/>
                <Button color="primary" variant="contained" onClick={()=>props.addTodo(text)}>Add Todo</Button>
            </Box>

            <Box>
                <Typography component="h1">List Items</Typography>
                <List>
                {props.todos.map((todo)=><ListItem key={todo.id}><ListItemText>{todo.text}</ListItemText><Button color="secondary" variant="contained" onClick={props.deleteTodo(todo.id)}>Delete</Button></ListItem>)}
                </List>
            </Box>
            
        </Box>
    )
}
const mapStateToProps = (state)=>({
    todos: state.todo
})
const mapDispatchToProps = (dispatch)=>({
    fetchTodos: ()=>dispatch(fetchTodos),
    addTodo: (payload)=>dispatch({ type: 'ADD_TODO', payload}),
    deleteTodo: (payload)=>()=>dispatch({ type: 'DELETE_TODO', payload})
})
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(TodoApp);
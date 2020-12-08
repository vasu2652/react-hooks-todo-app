
// Add components
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SignIn from './SignIn';
import SignUp from './SignUp';
const Application = ()=>{
    return(
        <>
            <NavBar/>
            <TodoForm/>
            <TodoList/>
        </>
    )
}
const App = ()=>{
    return (
        <Switch>
          <Route exact path="/">
            <Application />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        
    )
}
export default App;
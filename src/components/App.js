
// Add components
import React, { useContext } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./NavBar";
import SignIn from './login';
import SignUp from './SignUp';
import EnhancedTable from './DataTable';
import Store from '../context';
import { Redirect } from 'react-router';
const Application = ()=>{
    return(
        <>
            <NavBar/>
            <EnhancedTable/>
        </>
    )
}
function PrivateRoute({ children, ...rest }) {
  const { state } = useContext(Store);
  return (
    <Route
      {...rest}
      render={({ location }) =>
         state.user!==null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default ()=>{
    return (
        <Switch>
          <PrivateRoute exact path="/">
            <Application />
          </PrivateRoute>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
    )
}

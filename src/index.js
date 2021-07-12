import React, {  } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store';
//Add context, reducer and usePersist(LocalStorage)
// import Store from "./context";
// import reducer from "./reducer";
// import { usePersistedContext, usePersistedReducer } from "./usePersist";

// Metarial-UI Theme(Dark or Light)
import { CssBaseline, Container } from "@material-ui/core";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

const App = () => {
  // const globalStore = usePersistedContext(useContext(Store), "state");
  // const [state, dispatch] = usePersistedReducer(
  //   useReducer(reducer, globalStore),
  //   "state"
  // );

  // const theme = createMuiTheme({
  //   palette: {
  //     type: state.myTheme // "light" or "dark"
  //   }
  // });

  return (
    <Container>
      {/* <Store.Provider value={{ state, dispatch }}> */}
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Counter/>
          <TodoApp/>
        {/* </ThemeProvider> */}
      </Provider>
      {/* </Store.Provider> */}
    </Container>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

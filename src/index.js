import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainApp from './components/App';

//Add context, reducer and usePersist(LocalStorage)
import Store from "./context";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";

// Metarial-UI Theme(Dark or Light)
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, CssBaseline, Container } from "@material-ui/core";

const App = () => {
  const globalStore = usePersistedContext(useContext(Store), "state");
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );
    
  const theme = createMuiTheme({
    palette: {
      type: state.myTheme // "light" or "dark"
    }
  });

  return (
    <Container>
        <Store.Provider value={{ state, dispatch }}>
          <ThemeProvider theme={theme}>
          <Router>
              <CssBaseline />
              <MainApp/>
            </Router>
          </ThemeProvider>
        </Store.Provider>
    </Container>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";

const Store = React.createContext({
  myTheme: "light",
  baseUrl: "http://localhost:3001",
  headers:{
    'Content-Type':"application/json"
  },
  user:null
});

export default Store;

import React from "react";

const Store = React.createContext({
  todos: [
    "Learn HTML and CSS",
    "Learn JavaScript(ES6+)",
    "Design with Figma",
    "Develop applications with 'React' and 'Material-UI'",
  ],
  myTheme: "light",
  baseUrl: "http://localhost:3001",
  headers:{
    'Content-Type':"application/json"
  },
  user:null
});

export default Store;

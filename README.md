# React Hooks Todo List App
> a simple Todo List App using **React Hooks, Context** and **Material-UI**

### Architectural features of the application
- **No** Redux
- **No** class components
- Uses `Context` to share a **global_state(Store)**
- Uses `useReducer` to manage **state actions**
- `useState` to create local state
- `usePersist`(custom hooks) the state to **localStorage**
-  **Light/Dark** theme
- **JsonServer** mocking backend api's for making api calls
- **ReactRouter** implemented private routes and redirection using ReactRouter

## Install
Fist, fork the repo and clone to your local. Enter folder project by cmd and run
```sh
npm install #Install dependencies of the application
npm install -g json-server #Install Mock backend Server

```

## Run 

```sh
json-server --watch db.json --port 3001 #Starts the db-server on port 3001 and it requires db.json file in the root directory (Run it in seperate terminal)

npm start

```
## Preview

![UserDashboard]()

## License

**[MIT](LICENSE)** Licensed

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
];
export const fetchTodos = (dispatch, state)=>{
    fetch("http://localhost:3001/todos").then(res=>res.json()).then(response=>{
        console.log(response);
        dispatch({type:"todo/fetch", payload: response});
    });
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "todo/fetch":{
            return action.payload;
        }
        case "ADD_TODO":
            return [...state, { id: state.length+1, text: action.payload}]
        case "DELETE_TODO":
            return state.filter(t => t.id !== action.payload);
        default:
            return state;
    }
};

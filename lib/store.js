const store = (reducer, initialState)=>{
    var listeners;
    var state = initialState;
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state, action);
        listeners.forEach(i=>listeners())
    }
    function subscribe(listener){
        listeners.push(listener);
        return function unsubscribe(){
            listeners = listeners.filter(i=>i!==listener)
        }
    }
    return { getState, subscribe, dispatch}
}

const customMiddleware = storeApi=>next=>action=>{
    const result = next(action);
    return result;
}
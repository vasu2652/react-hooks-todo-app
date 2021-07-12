const initialState = {
    value: 0
}
export const changeCounter = (type)=>(dispatch, getState)=>{
    const state = getState();
    let value;
    if(type==="reset"){
        value = 0
    }
    value = type==="increment"?getCounterValue(state)+1:getCounterValue(state)-1
    fetch("http://locahost:3001/counter",{
        method: "POST",
        body: JSON.stringify({
            value
        }),
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json()).then(()=> dispatch({type}))
} 
export const getCounterValue = (state)=>state.counter.value
export default (state=initialState, action)=>{
    switch(action.type){
        case 'increment':{
           return {
               value : state.value +1 
           }
        }
        case 'decrement':{
            return {
                value : state.value - 1 
            }
        }
        case 'reset':{
            return {
                value: 0
            }
        }
        default: {
            return state
        }
    }
}
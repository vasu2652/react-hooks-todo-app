import { combineReducers } from 'redux'
import counter from './counter';
import todo from './todo';
export default combineReducers({
    todo,
    counter,
})
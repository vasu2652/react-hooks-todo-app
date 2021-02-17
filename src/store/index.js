import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
export default createStore(Reducer, applyMiddleware(thunkMiddleware));

import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const unsubscribe = store.subscribe(()=>{console.log("action taken place ",store.getState())})
store.dispatch({
    type:"addBook"
})
unsubscribe()
export default store
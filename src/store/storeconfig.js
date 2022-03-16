import { createStore , combineReducers} from 'redux';
import { homeReducer, updateReducer} from './reducer';


const rootReducer = combineReducers({
    home:homeReducer,
    update:updateReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const unsubscribe = store.subscribe(()=>{console.log("action taken place ",store.getState())})

store.dispatch({
    type:"addBook"
})
unsubscribe()
export default store
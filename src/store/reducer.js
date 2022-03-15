
import data from '../dataStore.json'

const reducer = (state = {allBooks: []},action)=>{
    switch(action.type){
        case "addBook":
            return {allBooks: data}
        case "updateState":
            return {allBooks:action.payload.data}
    }
}

export default reducer;
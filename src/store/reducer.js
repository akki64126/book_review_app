
import data from '../dataStore.json'

export default reducer = (state = {allBook: []},action)=>{
    switch(action.type){
        case "addBook":
            return {allBook: data}
    }
}
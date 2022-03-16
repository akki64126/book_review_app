import data from '../dataStore.json'

export const homeReducer = (initialState = {allBooks: []},action)=>{
    switch(action.type){
        case "addBook":
            return {allBooks: data}
        default:
            return initialState
    }
}

export const updateReducer = (initialState = {allBooks: []},action)=>{
    switch(action.type){
        case "updateState":
            return {allBooks: action.payload.data}
        default:
            return initialState
    }
}

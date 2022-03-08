import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "library",
    initialState: {allBooks:[],abcd:""},
    reducers: {
        addBook: (state,action)=>{
            state.allBooks = action.payload.allBooks
        },
        setabcd : (state,action)=>{
            state.abcd = action.payload.abcd
        }
    }
})
console.log(itemSlice.actions.setabcd)
export const {addBook,setabcd} = itemSlice.actions
export default itemSlice.reducer
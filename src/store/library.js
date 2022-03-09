import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "library",
    initialState: {allBooks:[],allComments:"",allRatings:""},
    reducers: {
        addBook: (state,action)=>{
            state.allBooks = action.payload.allBooks
        },
        addComment: (state,action)=>{
            state.allComments = action.payload.allComments
        },
        addRating: (state,action) =>{
            state.allRatings = action.payload.allRatings
        }
    }
})
export const {addBook,addComment,addRating} = itemSlice.actions
export default itemSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "library",
  initialState: { allBooks: [] },
  reducers: {
    addBook: (state, action) => {
      state.allBooks = action.payload.allBooks;
    },
    addComment: (state, action) => {
      state.allBooks = state.allBooks.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            comment: [
              ...element.comment,
              {
                comment_id: element.comment.length,
                desc: action.payload.comment,
                rating: action.payload.rating + 1,
              },
            ],
          };
        } else {
          return element;
        }
      });
    },
    updateRating: (state, action) => {
      return state;
    },
  },
});
export const { addBook, addComment, addRating } = itemSlice.actions;
export default itemSlice.reducer;
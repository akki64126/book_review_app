// import { createSlice } from "@reduxjs/toolkit";

// const itemSlice = createSlice({
//   name: "library",
//   initialState: { allBooks: [] },
//   reducers: {
//     addBook: (state, action) => {
//       state.allBooks = action.payload.allBooks;
//     },
//     updateState:(state,action)=>{
//         state = action.payload.data
//     },
//     addComment: (state, action) => {
//       state.allBooks = state.allBooks.map((element) => {
//         if (element.id === action.payload.id) {
//           return {
//             ...element,
//             comment: [
//               ...element.comment,
//               {
//                 comment_id: element.comment.length +1,
//                 desc: action.payload.comment,
//                 rating: action.payload.rating,
//               },
//             ],
//           };
//         } else {
//           return element;
//         }
//       });
//     },
//   },
// });
// export const { addBook, addComment, updateState} = itemSlice.actions;
// export default itemSlice.reducer;
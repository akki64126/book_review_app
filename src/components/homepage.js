import React from "react";
import MovieCard from "./MovieCard";
import Rating from "./Rating1";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addBook } from "../store/library";
import dataStore from "../dataStore.json";

function Homepage() {
  const dispatch = useDispatch();
  var books = useSelector((element) => {
    return element.allBooks;
  });
  const localSt = localStorage.getItem("store");
  if (localSt == null || localSt.length == 2) {
    dispatch(
      addBook({
        allBooks: dataStore,
      })
    );
    localStorage.setItem("store", JSON.stringify(books));
  } else {
    console.log(localStorage.getItem("store"));
    books = JSON.parse(localSt);
  }
  console.log(books);
  return (
    <div>
      <Header />
      <div className="flexbox">
        {books.map((book) => {
          return <MovieCard book={book} />;
        })}
      </div>
    </div>
  );
}
export default Homepage;
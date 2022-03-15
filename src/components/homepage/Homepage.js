import React from "react";
import Book_Card from "./Book_card";
import Header from "./Header";
import {connect } from "react-redux";

const mapStateToProps = (state,currentProps)=>{
  return {
    allBooks:state.allBooks
  }
}

const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    getAllData:()=>dispatch({type:"addBook"})
  }
}

function Homepage({getAllData,allBooks}) {
  // var books = useSelector((element) => {
  //   return element.allBooks;
  // });
  var store;
  const localSt = localStorage.getItem("store");
  if (localSt == null || localSt.length == 2) {
    getAllData()
    store = allBooks
    localStorage.setItem("store", JSON.stringify(store));
  } else {
    store = JSON.parse(localSt);
  }
  return (
    <div>
      <Header />
      <div className="flexbox">
        {store.map((book) => {
          return <Book_Card book={book} />;
        })}
      </div>
    </div>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
import React, { useEffect } from "react";
import Book_Card from "./Book_card";
import Header from "./Header";
import {connect } from "react-redux";

const mapStateToProps = (state)=>{
  return {
    allBooks:state.home.allBooks
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getAllData:()=>dispatch({type:"addBook"})
  }
}

function Homepage({getAllData,allBooks}) {
  useEffect(()=>{
    getAllData()
  },[])
  var store;
  const localSt = localStorage.getItem("store");
  if (localSt == null ) {
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
import React from "react";
import MovieCard from "./MovieCard";
import Rating from "./Rating";
import Header from "./Header"
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {addBook} from '../store/library'
import dataStore from '../dataStore.json'

function Homepage() {
    const dispatch = useDispatch()
    const books = useSelector((element)=>{
        return element.allBooks
    })
    useEffect(()=>{
        dispatch(addBook({
            allBooks: dataStore
        }))
    },[])
    console.log(books)
    return (
        <div>
            <Header />
            <div className="flexbox">
            {books.map(book=>{
                return <MovieCard book = {book}/>
            })}
            </div>
        </div>
    )
}
export default Homepage;
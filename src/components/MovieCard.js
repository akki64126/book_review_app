import React, { useState } from 'react'
import Bookimg from './Bookimg'
import Rating from './Rating'
import './movieCard.css'
import {Link,useSearchParams} from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { setabcd} from "../store/library"


export default function MovieCard(props) {
  
  const URL = "/page2?id="+props.book.id
  return (
      
      <div className='movieCard'> 
        <Link to = {URL}>
          <Bookimg link = {props.book.img} />
          <h2>Title: {props.book.title}</h2>
          <h2>Author: {props.book.author_name}</h2>
          <Rating datastar = {props.book.rating}/>
        </Link>
      </div>

  )
}

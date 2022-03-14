import React, { useState } from 'react'
import Book_img from '../common/Book_img'
import Rating from '../common/Rating'
import './Book_card.css'
import {Link,useSearchParams} from 'react-router-dom'


export default function Book_Card(props) {
  var total_sum = 0
 props.book.comment.map((ele)=>{
    return total_sum = total_sum+ele.rating
  })
  var avg_rating = total_sum/props.book.comment.length
  
  const URL = "/specific_book?id="+props.book.id
  return (
      
      <div className='movieCard'> 
        <Link to = {URL} style={{ textDecoration: 'none',color: 'white'}}>
          <Book_img  id="img-2" link = {props.book.img} />
          <h2>Title: {props.book.title}</h2>
          <h2>Author: {props.book.author_name}</h2>
          <Rating datastar = {avg_rating}/>
        </Link>
      </div>

  )
}

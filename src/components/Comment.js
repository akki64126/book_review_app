import React from 'react'
import Rating from './Rating'
import './comment.css'
function Comment(props) {
  return (
    <div className='comment-div'>
        
            <h2>{props.comment.desc}</h2>
        
            <Rating datastar = {props.comment.rating}/>
        
    </div>
  )
}

export default Comment
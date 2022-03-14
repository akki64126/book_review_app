import React from 'react'
import './Book_img.css'

function Book_img(props) {
  return (
    <div>
      <img id={props.id} src = {props.link}/>
    </div>
  )
}
export default Book_img
import React from "react";
import { RatingStar } from "rating-star";
import StarRatings from 'react-star-ratings';

export default function Rating1(props) {

// var total_sum = 0
//   props.datastar.comment.map((ele)=>{
//     return total_sum = total_sum+ele.rating
//   })
//   var avg_rating = total_sum/props.book.comment.length
// console.log(props.alldata.length)

  return (
    <div className="App">
      <StarRatings rating={props.datastar} starRatedColor="gold" starDimension="25px" />
    </div>
  )
}
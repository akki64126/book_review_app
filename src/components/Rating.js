import React from "react";
import { RatingStar } from "rating-star";
import StarRatings from 'react-star-ratings';

export default function Rating(props) {
    
    console.log(props)
    console.log(props.datastar)
  return (
    <div className="App">
      
      
      <StarRatings rating={props.datastar} starRatedColor="gold" starDimension="25px"/>
    </div>
  )
}
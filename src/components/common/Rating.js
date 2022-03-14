import React from "react";
import StarRatings from 'react-star-ratings';

export default function Rating(props) {
  return (
    <div className="App">
      <StarRatings rating={props.datastar} starRatedColor="gold" starDimension="25px" />
    </div>
  )
}
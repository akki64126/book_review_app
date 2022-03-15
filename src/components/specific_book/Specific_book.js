import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { addComment,updateState } from "../../store/library";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import "./Specific_book.css";
import Rating from "../common/Rating";
import Alert_popup from './Alert_popup';
import { RatingStar } from "rating-star";
import Book_img from '../common/Book_img';

const mapStateToProps = (state,currentProps)=>{
  return {
    allBooks:state.allBooks
  }
}

const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    getAllData:()=>dispatch({type:"addBook"}),
    updateState:(data)=>dispatch({type:"updateState",payload:{data:data}})
  }
}


function Specific_book({updateState}) {

  const [rating, setRating] = React.useState(0);
  const onRatingChange = val => {
    setRating(val);
  };

  const [show, setShow] = useState(false);
  var data = localStorage.getItem("store")
  useEffect(()=>{
    updateState(data)
  },[])
  const handleSubmit = (e, id) => {
    e.preventDefault();
    var value = document.getElementById("comment").value;
    console.log(rating)

    var inputid = document.getElementById("comment")

    if(value=="poor"||value=="waste"||value=="disgusting"||value=="horrible"||value=="filthy"){
      setShow(true)
       switch(value){
           case "poor":
                inputid.value = "p**r"
                break
            case "waste":
                inputid.value = "w***e"
                break
            case "disgusting":
                inputid.value = "d********g"
                break
            case "horrble":
                inputid.value = "h*****e"
                break
            case "filthy":
                inputid.value = "f****y"
                break
       }
       
    }  
    else{
    setShow(false)
    inputid.value = ""
    setRating(0)
    const currStore = JSON.parse(localStorage.getItem("store"));
    const ans = currStore.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          comment: [
            ...ele.comment,
            {
              comment_id: ele.comment.length +1,
              desc: value,
              rating: rating,
            },
          ],
        };
      } else {
        return ele;
      }
    });
    localStorage.setItem("store", JSON.stringify(ans));
    updateState({
      data: ans
    })
    }
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const books = JSON.parse(localStorage.getItem("store"));
  data = books.filter((data) => {
    return data.id == id;
  });
  const currentdata = data[0];
  const comments = currentdata.comment;

  var total_sum = 0
  currentdata.comment.map((ele)=>{
     return total_sum = total_sum+ele.rating
   })
   var avg_rating = total_sum/currentdata.comment.length

  return (
    <div>
      <div className="main-div">
        <div className="img-div">
          <Book_img   id="img-1" link={currentdata.img} />
        </div>
        <div className="content-div">
          <h1>Title: {currentdata.title}</h1>
          <h1>Author: {currentdata.author_name}</h1>
          <h1>
            <Rating datastar={avg_rating} />
          </h1>
        </div>
      </div>
      <div className='form-div' >
        <form onSubmit={(event) => handleSubmit(event, currentdata.id)}>
          <textarea id="comment" type="text" placeholder='Add Comment'></textarea>
          <RatingStar id="clickable" clickable rating={rating} onRatingChange={onRatingChange} size={40}/>
          <div className='btn-div' >
            <button  id='btn' type="submit"><b>Add Comment</b></button>
          </div>
        </form>

        </div>
        <div className='comment-section'>
                <h1>Comments</h1>
            </div>
        
        <div>
            
            {comments.map((comment) => {
                return <Comment comment={comment} />;
            })}
        </div>
        <Alert_popup
          id = {currentdata.id}
          handleSubmit={handleSubmit}
          onClose={() => setShow(false)}
          show={show}
        ></Alert_popup>
    </div>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Specific_book);
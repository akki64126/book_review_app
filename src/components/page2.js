import { Rating } from 'react-simple-star-rating'
import React, {useState} from "react";
import { addComment } from "../store/library";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import "./page2.css";
import Rating1 from "./Rating1";
import Modal from './Modal';


function Page2() {
    const [modal_input,setmodalinput] = useState(false) 
    const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useSelector((ele) => ele.allBooks);
  
  const handleSubmit = (e, id) => {
      
    e.preventDefault();
    var value = document.getElementById("comment").value;
    console.log(value)
    switch(value){
        case "poor":
            value = "p**r"
            setShow(true)
            break
    default:
        
    dispatch(
      addComment({
        id: id,
        comment: value,
        rating: 4,
      })
    );
    const currStore = JSON.parse(localStorage.getItem("store"));
    const ans = currStore.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          comment: [
            ...ele.comment,
            {
              id: id,
              desc: value,
              rating: 4,
            },
          ],
        };
      } else {
        return ele;
      }
    });
    localStorage.setItem("store", JSON.stringify(ans));
    }
  };
  
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const books = JSON.parse(localStorage.getItem("store"));
  console.log(books);
  const data = books.filter((data) => {
    return data.id == id;
  });
  console.log(data);
  const currentdata = data[0];
  console.log(currentdata);
  const comments = currentdata.comment;
  return (
    <div>
      <div className="main-div">
        <div className="img-div">
          <img src={currentdata.img} className="img" />
        </div>
        <div className="content-div">
          <h1>Title: {currentdata.title}</h1>
          <h1>Author: {currentdata.author_name}</h1>
          <h1>
            <Rating1 datastar={currentdata.rating} />
          </h1>
        </div>
      </div>
    
        <form onSubmit={(event) => handleSubmit(event, currentdata.id)}>
        <input id="comment" type="text"></input>
        <button  type="submit">Done</button>
        </form>
        
        <div>
            <div>
                <h1>Comments</h1>
            </div>
            {comments.map((comment) => {
                return <Comment comment={comment} />;
            })}
        </div>
        <Modal
            setmodalinput={setmodalinput}
          onClose={() => setShow(false)}
          show={show}
        ></Modal>
    </div>
  );
}
export default Page2;
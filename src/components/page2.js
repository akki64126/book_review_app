import { current } from "@reduxjs/toolkit";
import React from "react";
import {useSelector} from "react-redux"
import {useSearchParams} from 'react-router-dom'
import Comment from "./Comment";
import './page2.css'
import Rating from "./Rating";

function Page2()
{   
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert("done")
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    const books = useSelector((element)=>{return element.allBooks})
    const data = books.filter((data)=>{return data.id==id})
    const currentdata = data[0]
    console.log(currentdata)
    const comments = currentdata.comment
    return  <div>
                <div className="main-div">
                    <div className="img-div">
                        <img src={currentdata.img} className="img" />
                    </div>
                    <div className="content-div">
                        <h1>Title: {currentdata.title}</h1>
                        <h1>Author: {currentdata.author_name}</h1>
                        <h1><Rating datastar = {currentdata.rating}/></h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ></input>
                    <button  type="submit" >Done</button>
                </form>
                <div>
                    <div><h1>Comments</h1></div>
                    {comments.map(comment=>{return <Comment comment = {comment}/>})}
                </div>
            </div>

}
export default Page2; 
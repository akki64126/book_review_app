import React, { useState } from "react";
import "./Modal.css";
export default function Modal(props) {
  if (!props.show) {
    return null;
  }
   const onmodalclick = (e)=>{
        if(e=="yes")
        {
          props.setmodalinput("yes")
        }
        else{
          props.setmodalinput("no")
        }
   }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <button onClick={()=>{onmodalclick("no")}} value={"no"}>no</button>
            <button onClick={()=>{onmodalclick("yes")}} value={"yes"}>yes</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
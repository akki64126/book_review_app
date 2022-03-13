import React, { useState } from "react";
import "./Modal.css";
export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  var id  = props.id
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <h1>You have used restrited word..</h1>
          <h1>Still want to continue?</h1>
          <form>
            <button onClick={props.onClose} id="no" >no</button>
            <button onClick={(event)=>props.handleSubmit(event,id)} id="yes" >yes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
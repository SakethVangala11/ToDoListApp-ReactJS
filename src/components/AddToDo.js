import React, { useState } from "react";

const AddToDo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    if(!title | !desc){
        alert("Title or Description cannot be blank")
    }else{
        props.addToDoItem(title,desc)
        setTitle("")
        setDesc("")
    }
    
  }

  return (
    <form className="container my-3" onSubmit={submitHandler}>
      <h2>Add ToDo Item</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          ToDo Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          ToDo Description
        </label>
        <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
      </div>
      <button type="submit" className="btn btn-success btn-sm">
        Add ToDo Item
      </button>
    </form>
  );
};

export default AddToDo;

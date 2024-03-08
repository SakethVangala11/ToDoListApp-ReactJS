import React from 'react'

const ToDoItem = (props) => {
  return (

    <div className="card my-3">
  <div className="card-header">
    Task: {props.todo.sno}
  </div>
  <div className="card-body">
    <h5 className="card-title">Title: {props.todo.title}</h5>
    <p className="card-text">Description {props.todo.desc}</p>
    <button className='btn btn-small btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
  </div>
</div>
    
    // <div>
    //   <h4>Title: {props.todo.title}</h4>
    //   <p>Desc: {props.todo.desc}</p>
    //   <button className='btn btn-small btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    // </div>
  )
}

export default ToDoItem

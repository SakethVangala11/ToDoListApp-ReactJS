import React from 'react'
import ToDoItem from '../components/ToDoItem'
const ToDo = (props) => {
  return (
    <div className='container my-3'>
      <h2 className='text-center'>ToDo Works</h2>
      { props.todos.length==0 ? <h4 className='bg-info'>No Todos to Display</h4> :
        props.todos.map((todo)=>{
            return <ToDoItem todo={todo} onDelete={props.onDelete} key={todo.sno}/>
        })
    }
      
    </div>
  )
}

export default ToDo

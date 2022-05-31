import React from 'react'
import TodoItem from './TodoItem'

let container_style={
  marginTop: "1vw"
}

export default function Todos(props) {
  return (
    <div className='container' align="center" style={container_style}>
      {props.todos.length ===0 ? "No todos to display": 
      props.todos.map((todo)=>{
           return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}

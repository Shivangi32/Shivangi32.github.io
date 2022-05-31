import React from 'react'

let pstyle={

    "fontWeight": "bold",
    "fontFamily": "cursive",
    "fontSize": "2vw"
};

let itemstyle={
    backgroundColor: "#3E7CB1",
    width: "35vw",
    padding: "1vw",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    height: "5vw",
}

let btn={
    padding:"0.4vw",
    paddingLeft: "0.7vw",
    paddingRight: "0.7vw"
}

export default function TodoItem({todo,onDelete}) {
  return (
    <div style={itemstyle}>
      <p style={pstyle}>{todo.sno}. {todo.title}</p>
      <button style={btn} className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

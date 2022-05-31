import React from 'react'

export default function Footer() {

  let Footerstyle ={
    width: "100%",
    padding: "1vw",
    position: "absolute",
    top: "100vh"
  }
  return (

    <footer className='bg-dark text-light' style={Footerstyle}>
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

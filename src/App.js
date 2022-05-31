import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {

  let initTodo = [];

  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  }
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const addTodo = (title) => {
    let sno = 0;
    if (todos.length != 0)
      sno = todos[todos.length - 1].sno;

    const myTodo = {
      title: title,
      sno: sno + 1
    }
    setTodos([...todos, myTodo]);

  };

  const onDelete = (todo) => {
    console.log("I am in delete", todo);
    //Deleting this way in react doesn't work
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  };


  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

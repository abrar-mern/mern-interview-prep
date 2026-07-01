import React, { use, useState } from "react";
import {TaskList} from "./components/TaskList";
import {AddTodo} from "./components/AddTodo"

export const App = () => {
  const initalTodos = [
    {
      id: 0,
      title: "Buy me a milk",
      done: false,
    },
    {
      id: 1,
      title: "Buy me a milk",
      done: false,
    },
    {
      id: 2,
      title: "Buy me a milk",
      done: false,
    },
  ];

  const [todos, setTodos] = useState(initalTodos);
  const [nextId, setnextId] = useState(3)

  function addTodoHandler(title){
    setTodos([
      ...todos,
      {
        id : nextId,
        title,
        done : false
      }
    ])
    setnextId(nextId + 1)
  }

  function changeTodoHandler(nexttodo){
    setTodos(todos.map((t) => (t.id === nexttodo.id ? nexttodo : t)))
  }

  function removeTodoHandler(todoid){
    setTodos(todos.filter((t) => (t.id !== todoid)))
  }
  return <div>
    <AddTodo
      addtodo = {addTodoHandler}
    />
    <TaskList
    todos = {todos}
    onchange = {changeTodoHandler}
    onremove = {removeTodoHandler}
    />
  </div>;
};

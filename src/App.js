//import logo from './logo.svg'; - Do not need this logo.
import React, { useState } from 'react';
import data from "./data.json";

//Components 
import Header from "./header";
import ToDoList from "./todolist";

import './App.css'; //This is the stylesheet for the app.

function App() {
  const [ toDoList, setToDoList ] = useState(data); // This will put mapped data in an array.

  return (
    <div className="App">
  	  STEPHEN'S TO-DO LIST
      <ToDoList toDoList={toDoList}/>
    </div>
  ); //This will display the ToDo List.
}
// test 
export default App;

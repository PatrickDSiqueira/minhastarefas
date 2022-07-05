import React, { useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import  {v4 as uuidv4} from 'uuid';

const App = () =>{
  const [tasks, setTasks]=useState([
    {
      id:'1',
      title: 'Estudar programação',
      completed: false,
    },{
      id:'2',
      title: 'Ler livros',
      completed: true,
    },{
      id:'2',
      title: 'Ler livros',
      completed: true,
    }
  ]);
  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title : taskTitle,
      id: uuidv4(),
      completed : false
    }];
    setTasks(newTask);
  }

  return <>
  <div className="container">
    <AddTask handleTaskAddition ={handleTaskAddition}/>
    {<Tasks tasks = {tasks}/>}
  </div>
  </>
}

export default App;
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

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title : taskTitle,
      id: uuidv4(),
      completed : false
    }];
    setTasks(newTask);
  }

const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks);
}

  return <>
  <div className="container">
    <AddTask handleTaskAddition ={handleTaskAddition}/>
    {<Tasks tasks = {tasks} handleTaskClick = {handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>}
  </div>
  </>
}

export default App;
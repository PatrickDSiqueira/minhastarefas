import React from "react";
import './Task.css'

const Task = ({task, handleTaskClick}) =>{
    console.log(task);
    return <div className="task-container"

    style={task.completed ? { borderLeft: '6px solid chartreuse'}:{}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
       {task.title}
        </div>
       <div className="button-container">
            <button className="remove-task-button">X</button>
       </div>
    </div>;
}

export default Task;
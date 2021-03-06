import React from "react";
import './Task.css';
import {CgClose, CgInfo} from "react-icons/cg";
import { Link } from 'react-router-dom';


const Task = ({task, handleTaskClick, handleTaskDeletion}) =>{
    console.log(task);
    return <div className="task-container"

    style={task.completed ? { borderLeft: '6px solid chartreuse'}:{}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
       {task.title}
        </div>
       <div className="button-container">
            <button className="remove-task-button" onClick={()=>handleTaskDeletion(task.id)}>
                <CgClose />
            </button>
                <Link to={`/${task.title}`}>
            <button className="see-task-details-button">
                    <CgInfo />
            </button>
                </Link>
       </div>
    </div>;
}

export default Task;
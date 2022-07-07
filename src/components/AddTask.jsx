import Button from "./Button";
import React, { useState } from "react";
import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {

    const[InputData, setInputData]=useState("");

    const handleInputChange = (e) => {
            setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(InputData);
        setInputData('');
    }

    return (<div className="add-task-container">
        <input 
        onChange={handleInputChange}
        value = {InputData}
        type="text" 
        className="add-task-input"/>
        <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>)
}

export default AddTask;
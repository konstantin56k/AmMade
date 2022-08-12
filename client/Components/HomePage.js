import React, { useState } from "react";
import Carousel from "./Carousel";
import { useSelector, useDispatch } from "react-redux";
import { removeLastTask, addTask } from "../../src/actions/index";

function HomePage() {
    const taskList = useSelector(state => state.taskList);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    function handleInputValue(event) {
        const value = event.target.value;
        setInputValue(value);
    };

    function submitTask(event) {
        dispatch(addTask(inputValue));
        setInputValue('')
        event.preventDefault();
    };

    function deleteLastTask(event) {
        dispatch(removeLastTask());
        event.preventDefault();
    }
    
    return (
        <div className="home_page">
            <Carousel />
            <form onSubmit={submitTask}>
                <input onChange={handleInputValue} value={inputValue}></input>
                <button onClick={deleteLastTask}>Delete last task</button>
                <button type='submit'>Add task</button>
            </form>
            <ul>
                {taskList.map((task, idx) => {
                    console.log(taskList)
                    return (
                        <li key={idx}>
                            {task}
                        </li>
                    )})
                }
            </ul>
        </div>
    );
};

export default HomePage;
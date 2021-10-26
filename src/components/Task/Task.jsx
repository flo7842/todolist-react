import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Task.module.css'

const Task = (props) => {

    const [todo, setTodo] = useState(false)

    const handleClick = () => {
        setTodo(!todo)
    }
    
    return (
        <div>
            <div className={style.container}>
                <div className={todo ? style.taskChecked : style.todo}>
                    <h1>Une appli react</h1>
                    <p>11/09/2021</p>
                </div>
                <Checkbox clickHandler={handleClick}/>
            </div>
        </div>
    );
};

export default Task;
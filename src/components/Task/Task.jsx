import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Task.module.css'

const Task = (props) => {

    const [todo, setTodo] = useState(false)

    const {inputText, dateDay} = props.item

    const handleClick = () => {
        setTodo(!todo)
    }


    
    return (

        <div>
            {
                inputText && inputText.length > 1 || inputText !== undefined ? 
                <div className={todo ? style.taskChecked : style.container}>
                    <div>
                        <h1>{inputText}</h1>
                        <p>Ajouté le {dateDay}</p>
                    </div>
                    <Checkbox clickHandler={handleClick}/>
                </div> : 'Aucune tache définis'
            }
            
        </div>
        
    );
};


export default Task;
import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Task.module.css'
import PropTypes from 'prop-types';

const Task = (props) => {

    const [todo, setTodo] = useState(false)

    const handleClick = () => {
        setTodo(!todo)
    }
    
    return (

        <div>
            { props.item &&
                props.item.inputText && props.item.inputText.length > 1 && props.item.inputText !== undefined ? 
                <div className={todo ? style.taskChecked : style.container}>
                    <div>
                        <h1>{props.item.inputText}</h1>
                        <p>Ajouté le {props.item.dateDay}</p>
                    </div>
                    <Checkbox clickHandler={handleClick}/>
                </div> : 'Aucune tache définis'
            }
            
        </div>
        
    );
};

Task.propTypes = {
    todo: PropTypes.array,
    inputText: PropTypes.string,
    dateDay: PropTypes.string
}

export default Task;


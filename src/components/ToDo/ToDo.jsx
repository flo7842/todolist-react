import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Task from '../Task/Task';
import style from './ToDo.module.css'

const ToDo = (props) => {

    const [query, setQuery] = useState('')


    
    //let textInput = React.createRef();
    
    //const onChange = event => setQuery(event.target.value)
    
    

    return (
        <div>
            <div className={style.horaire}>
                {props.minute}
            </div>
            <div className={style.addTodo}>
                <form>
                    <input
                        type="text"
                        //ref={textInput}
                        placeholder="Aujourd'hui je fais..."
                        
                    />
                    <button className={style.btn} type="button">Ajouter</button>
                </form>
            </div>
            <Task />
            
        </div>
    );
};

export default ToDo;
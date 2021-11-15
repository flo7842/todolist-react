import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Task.module.css'
import PropTypes from 'prop-types';
import EditBtn from '../EditBtn/EditBtn';
import InputEdit from '../InputEdit/InputEdit';
import axios from 'axios';

const Task = (props) => {

    const [todo, setTodo] = useState(props.item.status)
    const [inputUpdate, setInputUpdate] = useState('')
    const [visibleInput, setVisibleInput] = useState(style.inputHidden)
    const [visibleBtn, setVisibleBtn] = useState(style.hiddenBtn)
    const [todoTitle, setTodoTitle] = useState(style.todoTitle)
    let userId = props.item.id
    let config = {
        headers: {
          'Authorization': 'Bearer ' + props.authUser.token
        }
      }
      //console.log(props.)

    // useEffect(() => {
        
    //     console.log('Le premier todo', todo) 
    // }, [todo])

    
    const handleClick = async (props) => {
            console.log('props', props.target.checked)

            await setTodo(!todo)
            console.log('fonction onchange', todo)
        
        try{
            await axios
                .put('http://localhost:8000/api/tasks/' + userId, {status: props.target.checked}, config)
                .then(response => {
                    console.log(response)
                })
        }catch(error){
            console.log(error)
        }
    }



    const handleDblClick = (input) => {
      
        //setQuery([...query, {id: query.length + 1, inputText: input, dateDay: dateDay}])
    }

    const handleChange = (e) => {
        
        setInputUpdate(e.target.value)
        
    }

    const dblClickTask = () => {
        setInputUpdate(props.item.inputText)
        setVisibleInput(style.visibleInput)
        setTodoTitle(style.todoTitleHidden)

        setVisibleBtn(style.visibleBtn)
    }

    const updateTask = () => {
        props.updateTask(props.item.id, inputUpdate)

        
        setVisibleInput(style.inputHidden)
        setTodoTitle(style.todoTitle)
        setVisibleBtn(style.hiddenBtn)
    }

   
    var d = new Date(props.item.createdAt);
    var n = d.toLocaleString('fr-FR');
    var dateFrSplit = n.split(",")
    var dateFr = dateFrSplit.join(" à")
    

    return (

        <div className={style.taskContainer}>
            { props.item &&
                props.item.title && props.item.title.length > 1 && props.item.title !== undefined ? 
                <div className={todo ? style.taskChecked : style.container}>
                    <div>
                        <h1 onDoubleClick={dblClickTask} className={todoTitle}>{props.item.title}</h1>
                        <InputEdit 
                            dblClickTask={dblClickTask}
                            handleChange={handleChange}
                            visibleInput={visibleInput}
                            updateTask={updateTask}
                            todoTitleItem={props.item.title}
                            visibleBtn={visibleBtn}
                        />
                        <p className={style.addedAt}>Ajouté le {dateFr}</p>
                    </div>
                    <Checkbox clickHandler={handleClick} isChecked={todo}/>
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


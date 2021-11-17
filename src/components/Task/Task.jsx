import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Task.module.css'
import PropTypes from 'prop-types';
import EditBtn from '../EditBtn/EditBtn';
import InputEdit from '../InputEdit/InputEdit';
import axios from 'axios';

const Task = (props) => {

    const [status, setStatus] = useState(props.item.status)
    const [inputUpdate, setInputUpdate] = useState('')
    const [visibleInput, setVisibleInput] = useState(style.inputHidden)
    const [visibleBtn, setVisibleBtn] = useState(style.hiddenBtn)
    
    const [statusTitle, setStatusTitle] = useState(style.statusTitle)
    
    let userId = props.item.id
    let config = {
        headers: {
          'Authorization': 'Bearer ' + props.authUser.token
        }
    }

    const handleClick = async (props) => {
        await setStatus(!status)   
    }

    const handleChange = (e) => {
        setInputUpdate(e.target.value)
    }

    const dblClickTask = () => {
        setInputUpdate(props.item.inputText)
        setVisibleInput(style.visibleInput)
        setStatusTitle(style.statusTitleHidden)

        setVisibleBtn(style.visibleBtn)
    }

    const updateTask = () => {
        props.updateTask(props.item.id, inputUpdate)

        setVisibleInput(style.inputHidden)
        setStatusTitle(style.statusTitle)
        setVisibleBtn(style.hiddenBtn)
    }

   
    var d = new Date(props.item.createdAt);
    var n = d.toLocaleString('fr-FR');
    var dateFrSplit = n.split(",")
    var dateFr = dateFrSplit.join(" à")

    return (

        <div>
            { props.item &&
                props.item.title && props.item.title.length > 1 && props.item.title !== undefined ? 
                <div className={status ? style.taskChecked : style.container}>
                    <div>
                        <h1 onDoubleClick={dblClickTask} className={statusTitle}>{props.item.title}</h1>
                        <InputEdit 
                            dblClickTask={dblClickTask}
                            handleChange={handleChange}
                            visibleInput={visibleInput}
                            updateTask={updateTask}
                            statusTitleItem={props.item.title}
                            visibleBtn={visibleBtn}
                        />
                        <p className={style.addedAt}>Ajouté le {dateFr}</p>
                    </div>
                    <Checkbox clickHandler={handleClick} isChecked={status}/>
                </div> : 'Aucune tache définis'
            }
        </div>
    );
};

Task.propTypes = {
    status: PropTypes.array,
    inputText: PropTypes.string,
    dateDay: PropTypes.string
}

export default Task;


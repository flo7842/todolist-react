import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './AddTodo.module.css'
import Button from '../Button/Button';



const AddTodo = (props) => {

    const [inputText, setInputText] = useState('')
    const [styleOfInput, setStyleOfInput] = useState(style.validInput)
    const [styleOfBtn, setStyleOfBtn] = useState(style.btndisabled)
    const [disableBtn, setDisableBtn] = useState(true)


    

    const addTask = () => {
        fetch('http://localhost:3000/task/', {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({inputText})}).then(function(response) {
           
            return response.json();
         }).then(function(data) {
            props.onAddTodo(data.inputText)

            setInputText('')
        });
        
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
        
        if(e.target.value.length > 0 && e.target.value.length < 3 || e.target.value.length > 20){
            setStyleOfInput(style.invalidInput)
            setStyleOfBtn(style.btndisabled)
            setDisableBtn(true)
        }else{
            setStyleOfInput(style.validInput)
            setDisableBtn(false)
            setStyleOfBtn(style.btn)
        }

        if(!e.target.value.match(/^[a-z0-9' ]+$/i)){
            alert('Le caractère ( ' + e.target.value.at(-1) + ' ) n\'est pas valide !')
            setInputText(e.target.value.slice(0, -1))
        }
        
    }

    

    return (
        <div className={style.addTodo}>
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputText}
                    placeholder="Aujourd'hui je fais..."
                />
                <Button disableBtn={disableBtn} btnStyle={styleOfBtn} postLogin={addTask} />
            </form>
        </div>
    );
};

export default AddTodo;
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import style from './ToDo.module.css'
import Button from '../Button/Button';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AddTodo from '../AddTodo/AddTodo';


const ToDo = (props) => {
    const [idNumber, setIdNumber] = useState(0)
    const [query, setQuery] = useState([{}])
    const [styleOfInput, setStyleOfInput] = useState(style.validInput)
    const [styleOfBtn, setStyleOfBtn] = useState(style.btndisabled)
    const [disableBtn, setDisableBtn] = useState(true)
    

    let dateObject = new Date();
    let dayDate = dateObject.getDate()
    let monthDate = dateObject.getMonth() + 1
    let dateDay = dayDate + '/' + monthDate + ' à ' + dateObject.getHours() + 'h'

    const handleAddTodo = (inputText) => {

        console.log('La query',query)

        
        setQuery([...query, {id: query.length + 1, inputText: inputText, dateDay: dateDay}])

        
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        
        const newItems = [...query];
        const [removed] = newItems.splice(result.source.index, 1);
        
        const removeElem = [...query]

        newItems.splice(result.destination.index, 0, removed);
        setQuery(newItems)
        if(result.destination.droppableId == "onRemoveDragEnd"){
            console.log('result.destination.index',result.destination.index)
            removeElem.splice(result.destination.index, 1)
            setQuery(removeElem)
            console.log('Deuxième query',removeElem)
        }
        console.log('Source index',result.source.index)
        console.log('Destination',result.destination)
    }

    const onRemoveDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        
        const newItems = [...query];
        const [removed] = newItems.splice(result.source.index, 1);
        console.log('removed', removed)
        newItems.splice(result.destination.index, removed);
        setQuery(newItems)
        
    }

    return (
        <div>
            <div className={style.horaire}>
                {props.minute}
            </div>
            <AddTodo onAddTodo={handleAddTodo}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {query.map((item,index)=>(
                                
                            <Draggable key={item.id} draggableId={item.id !== undefined ? item.id.toString() : '0'} index={index}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>

                                        <Task key={index} item={item} isDraggingOver={snapshot}/>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
                <Droppable droppableId="onRemoveDragEnd">
                {(provided, snapshot) => (
                    
                    <div className={style.onDragDelete} {...provided.droppableProps} ref={provided.innerRef}>
                        
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
                
            </DragDropContext>
        </div>
    );
};

export default ToDo;


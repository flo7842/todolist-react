import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import style from './ToDo.module.css'
import Button from '../Button/Button';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AddTodo from '../AddTodo/AddTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDo = (props) => {
    const [idNumber, setIdNumber] = useState(0)
    const [query, setQuery] = useState([])
    
    

    let dateObject = new Date();
    let dayDate = dateObject.getDate()
    let monthDate = dateObject.getMonth() + 1
    let dateDay = dayDate + '/' + monthDate + ' à ' + dateObject.getHours() + 'h'

    const fetchUser = async () => {
        const response = await fetch('http://localhost:8000/api/tasks', { 
            method: 'GET', 
            headers: new Headers({
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzY2MzM3OTgsImV4cCI6MTYzNjYzNzM5OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYmV2ZXJseTA1QGJlcmduYXVtLmNvbSJ9.Y6KeczFYCYL8J1Rcvtj92vFQ2JXGKvtuYAYiq2XP9sGJ4oAhdi0WmDnNk-TS7tfpKvMUTzi4Vc2QnUUsJ8IcTDGF8fAp9t20EW4YUTZ7YA9xczP3UsMCNPOqS6ZhrU9XB2NVCMT8826cXSv4gmLitfqV-TekPdVnIHy8UZl0DHmQD_QxY-2O0h0lKJa8ki9Sf-1-NRqYOZRmj35lrADybZaASqeyus99IdAu-hcz9DRx-X2TGEHEToEQaKYEca8xtZxkG1xCpHMpqMJIt6j3i8GLCvY4whoWNfPtRZfvQZGVVXx5yMtDh0-VP77jE3RM0z0a0OIVeDrXVFNnRw-hYQ', 
              'Content-Type': 'application/json'
            })}) 
        
        if(!response.ok) {
          throw Error("Une erreur est survenue, veuillez réesayer")
        }
        return response.json()
    }
    useEffect(() => {
        fetchUser().then(tasks => {
            
                setQuery(tasks['hydra:member'])
             
            
        })
    }, []);
    
    const handleAddTodo = (inputText) => {
        console.log('length of query',query.length)
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
        
        if(result.destination.droppableId === "onRemoveDragEnd"){
            removeElem.splice(result.destination.index, 1)
            setQuery(removeElem)
        }
        
    }

    const updateTask = (index,input, e) => {
        console.log('input', input)
        
        console.log('query', query);
        let newArr = [...query]; // copying the old datas array
        console.log('newArr 1', newArr);
        let item = {id: index, inputText: input, dateDay: dateDay}; // replace e.target.value with whatever you want to change it to
        newArr[newArr.findIndex(el => el.id === item.id)] = item;
        
        setQuery(newArr);
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
                        
                        {query && query.map((item,index)=>(
                                
                            <Draggable key={item.id} draggableId={item.id !== undefined ? item.id.toString() : '0'} index={index}>
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>

                                        <Task 
                                            key={index} 
                                            item={item} 
                                            isDraggingOver={snapshot} 
                                            id={item.id}
                                            updateTask={updateTask}
                                        />
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
                            
                            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                            
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                
            </DragDropContext>
        </div>
    );
};

ToDo.propTypes = {
    horaire: PropTypes.string,
    idNumber: PropTypes.number,
    query: PropTypes.string,
    disableBtn: PropTypes.bool,
    dateObject: PropTypes.object,
    monthDate: PropTypes.string,
    dateDay: PropTypes.string,
}

export default ToDo;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import style from './ToDo.module.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AddTodo from '../AddTodo/AddTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router';


const ToDo = (props) => {
    const [query, setQuery] = useState([])
    const navigate = useNavigate();

    let dateObject = new Date();
    let dayDate = dateObject.getDate()
    let monthDate = dateObject.getMonth() + 1
    let dateDay = dayDate + '/' + monthDate + ' à ' + dateObject.getHours() + 'h'
    let authUser = JSON.parse(localStorage.getItem('authUser'))
   
    const fetchUser = async () => {
        if(authUser !== null){

            const response = await fetch('http://localhost:8000/api/users/'+authUser.id+'/tasks', { 
                method: 'GET', 
                headers: new Headers({
                  'Authorization': 'Bearer ' + authUser.token,
                  'Content-Type': 'application/json'
                })})
            
            if(response.status === 401) {
                navigate('/login')
            }
            return response.json()
        }else{
            navigate('/login')
            
        }

    }
    
    

    useEffect(() => {
        if(authUser !== null){
            fetchUser().then(tasks => {
                setQuery(tasks['hydra:member'])
            })
        }else{
            navigate('/login')
        }
    }, []);
    
    const handleAddTodo = (inputText) => {
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
        let newArr = [...query];
        
        let item = {id: index, inputText: input, dateDay: dateDay};
        newArr[newArr.findIndex(el => el.id === item.id)] = item;
        
        setQuery(newArr);
    }

    const onRemoveDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        
        const newItems = [...query];
        const [removed] = newItems.splice(result.source.index, 1);
     
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
                                            authUser={authUser}
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
    query: PropTypes.string,
    disableBtn: PropTypes.bool,
    dateObject: PropTypes.object,
    monthDate: PropTypes.string,
    dateDay: PropTypes.string,
}

export default ToDo;

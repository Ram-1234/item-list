import React from 'react';
 import CancelIcon from '@material-ui/icons/Cancel';
 import EditIcon from '@material-ui/icons/Edit';
 import './styles.css';

const TodoList=(props)=>{


    return (
        <>
        <div className="todo_style">
        <CancelIcon onClick={()=>{
            props.onSelect(props.id);
        }}/>   
         <li style={{color:`${props.textColor}`}} className='listeItems' >{props.text}</li>
         <EditIcon onClick={()=>{props.onSelectItem(props.id)}}/>
        </div>
        </>
    )  
}

export default TodoList;
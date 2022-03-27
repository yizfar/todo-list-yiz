import React from 'react';
import {useDispatch} from "react-redux";
import { deleteTodoSingle } from '../actions/todoActions';

function ItemTodo(props){
  const dispatch = useDispatch();
  let item = props.item
  return(
    <div className='border my-2 p-2'>
      <button onClick={() => {
        dispatch(deleteTodoSingle(item.id))
      }} className='bg-danger badge float-end ms-2 mt-1'>X</button>
      <h4>{item.name} - {item.time}</h4>
    </div> 
  )
}

export default ItemTodo
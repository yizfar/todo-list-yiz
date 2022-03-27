import React, { useRef } from 'react';
import {useDispatch} from "react-redux"
import { addTodo, resetAll } from '../actions/todoActions';

function InputTodo(props) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const timeRef = useRef();

  const onAddClick = () => {
    let todoObj = {
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()
    }
    // dispatch({type:"ADD_TODO",newTodo:todoObj});
    // בצורה הזאת למתכנתים שעובדים מול הרידיוסר
    // יהיה קל יותר להבין מה הם צריכים לשלוח לפונקציות
    dispatch(addTodo(todoObj));
  }

  return (
    <div className='col-md-6'>
      <h1>Task app</h1>
      <label>Name of task:</label>
      <input ref={nameRef} type="text" className='form-control' />
      <label>time of task:</label>
      <input ref={timeRef} type="time" className='form-control' />
      <button onClick={onAddClick} className='btn btn-dark mt-3'>Add todo task</button>
      <button onClick={() => {
        dispatch(resetAll());
      }} className='btn btn-danger mt-3 ms-2'>Reset</button>
    </div>
  )
}

export default InputTodo
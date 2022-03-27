import React, { useEffect } from 'react';
import InputTodo from './inputTodo';
import ListToDo from './listTodo';

function AppTodo(props){

  useEffect(() => {
    document.title = "Todo list "
  },[])

  return(
    <div  className='container my-3 ' >
      <InputTodo />
      <ListToDo />
    </div> 
  )
}

export default AppTodo
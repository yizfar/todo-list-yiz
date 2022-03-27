import React from 'react';
import {useSelector} from "react-redux";
import {sortBy} from "lodash"
import ItemTodo from './itemTodo';


function ListToDo(props){
  // const todos_ar2 = useSelector(state=> state.todos_ar)
  // const {todos_ar} = useSelector(state=> state)
  const todos_ar = useSelector(state=> sortBy(state.todos_ar,"time"));

  return(
    <div className='col-md-6 my-3 '>
      <h3>List of todos you added</h3>
      {todos_ar.map(item => {
        return(
          <ItemTodo key={item.id} item={item} />
        )
      })}
    </div> 
  )
}

export default ListToDo
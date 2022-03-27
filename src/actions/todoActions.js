export const ADD_TODO = "ADD_TODO";
export const RESET_ALL_TODO = "RESET_ALL_TODO";
export const DELETE_TODO_SINGLE = "DELETE_TODO_SINGLE"

export const deleteTodoSingle = (idDel) => {
  return {type:DELETE_TODO_SINGLE,idDel};
}

// ה2 כוכביות נותן תיאור שקוראים לפונקציה בעורך וי אס
/** newTodo -> need to be object with {name,time,id} */
export const addTodo = (newTodo) => {
  return {type:ADD_TODO, newTodo};
}
/** reset the all todos_ar to blank array [] */
export const resetAll = () => {
  return {type:RESET_ALL_TODO}
}
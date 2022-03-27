import { ADD_TODO, DELETE_TODO_SINGLE, RESET_ALL_TODO } from "../actions/todoActions";


// סטייט התחלתי באתחול לדוגמא הוספנו 2 משימות
// בודק אם יש מידע בלוקאל ואם כן שואב אותו אם לא מכניס
// את 2 המשימות של הברירת מחדל
const initState = localStorage["todos"] ? JSON.parse(localStorage["todos"]) : {
  todos_ar: [

  ],
  user: "koko"
} 

export const clientReducer = (_state = initState, _action) => {
  switch (_action.type) {
    case DELETE_TODO_SINGLE:
      let todos_ar = _state.todos_ar.filter(item => item.id != _action.idDel)
      return saveLocal({..._state, todos_ar});

    case RESET_ALL_TODO:
      return saveLocal({..._state, todos_ar:[]});

    case ADD_TODO:
      // ...state -> כדי לא לדרוס מאפיינים קיימים בסטייט
      // ..._state.todos_ar -> כדי לא למחוק את המשימות הקיימות
      // _action.newTodo -> אובייקט של משימה חדשה שיתווסף למערך טודו איי אר 
      return saveLocal({ ..._state, todos_ar: [..._state.todos_ar, _action.newTodo] });

    default:
      // אמור לפעול בפעם הראשונה שהרדיוסר פועל כאשר עושים 
      // CREATESTORE
      return _state;
  }
}

// save in local and return state - updateStateAndLocal
const saveLocal = (_newState) => {
  localStorage.setItem("todos", JSON.stringify(_newState));
  return _newState;
}
import { useReducer,useEffect} from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Recoletar la piedra del alma",
    //   done: false,
    // },
    // {
    //   id: new Date().getTime() * 3,
    //   description: "Recoletar la piedra del alma",
    //   done: false,
    // },
  ];

  

export const useTodos = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];
    }


 const [todos, dispatch] = useReducer(todoReducer, initialState,init);
    
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };


  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);





    return {
        ...todos,
        todos,
        todosCount:todos.length, 
        pendingTodosCount:todos.filter(todo => !todo.done).length ,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}

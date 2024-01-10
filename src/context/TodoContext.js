import { createContext, useContext } from "react";

let TodoContext = createContext({
    todo:[],
    addTodo:(todo) => {},
    editTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    handleComplet:(id) => {},
    isComplete:false
});

export let TodoProvider = TodoContext.Provider;


export let useTodo = () => {
return useContext(TodoContext)
}



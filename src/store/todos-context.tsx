import { useState } from "react";
import Todo from "../models/todo";
import React from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

const TodosContextProvider: React.FC<{children: any}> = (props) => {

    const [itemArray, setItemArray] = useState<Todo[]>([]);

    const onAddHandler = (text: string) => {

        const newItem = new Todo(text)

        setItemArray((prevTodo) => {
            return prevTodo?.concat(newItem);
        });
    }

    const onRemoveHandler = (id: string) => {
        setItemArray((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id)
        })
    }
    const contextValue: TodosContextObj = {
        items: itemArray,
        addTodo: onAddHandler,
        removeTodo: onRemoveHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;



import React, { useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";


const NewTodo: React.FC = () => {

    const todoCtx = useContext(TodosContext);

    const todoText = useRef<HTMLInputElement>(null);

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoText.current!.value;
        
        if(enteredText.trim().length === 0){
            return;
        }
        
        todoCtx.addTodo(enteredText);
        todoText.current!.value = ""

    }

    return(
        <form onSubmit={formHandler} className={classes.form}>
            <label htmlFor='text'>Todo Text - Add a new item to the list, click on the item to remove it.</label>
            <input type='text' id='text' ref={todoText}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
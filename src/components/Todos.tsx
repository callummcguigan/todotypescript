import React, { useContext } from 'react'
import Item from './Item'
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context'


const Todos: React.FC = () => {

    const todoCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => (
                <Item 
                key={item.id}
                id={item.id} 
                text={item.text} 
                onRemoveItem={todoCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    )
}

export default Todos
import React from "react";
import classes from './Item.module.css'

const Item: React.FC<{text: string, id: string, onRemoveItem: (id: string) => void}> = (props) => {

    

    return(
        <li className={classes.item} key={props.id} onClick={props.onRemoveItem.bind(null, props.id)}>{props.text}</li>
    )
}

export default Item;
import React from "react";

function TodoItem(props){
    

    return(
        <div className="todo-items">      
            <ul>
                <li>
                {props.item}
                <button onClick={props.onRemove}>X</button>
                </li>    
            </ul>  
            </div>
    )
}
export default TodoItem;
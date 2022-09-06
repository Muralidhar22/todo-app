import { useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";

const ClearCompletedItems = ({ classname }) => {
    const { clearCompletedTodoItems } = useContext(TodoListContext)
    
    return(
        <button className={classname} onClick={
            () =>  clearCompletedTodoItems()
          }>Clear completed</button>
    )
}

export default ClearCompletedItems;
import { useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";

const ClearCompletedItems = () => {
    const { clearCompletedTodoItems } = useContext(TodoListContext)
    
    return(
        <button onClick={
            () =>  clearCompletedTodoItems()
          }>Clear completed</button>
    )
}

export default ClearCompletedItems;
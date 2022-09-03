import { useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";
import { Link } from "react-router-dom";

const TodoListCategories = () => {
    // const { 
    //     todoItems,
    //     displayActiveTodoItems,
    //     displayCompletedTodoItems
    //  } = useContext(TodoListContext)

    return(
        <div className="todo-list-status">
        <Link to="/">
            All
        </Link>
        <Link to="/active-todo">
            Active
        </Link>
        <Link to="/completed-todo">
            Completed
        </Link>
    </div>  
    )
}

export default TodoListCategories;
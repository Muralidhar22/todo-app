import{ useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";
import ClearCompletedItems from "../clear-completed-items/ClearCompletedItems.component"
import TodoListCategories from "../todo-list-categories/TodoListCategories.component"
import styles from "./TodoListFooter.styles.module.css";

const TodoListFooter = () => {
    const { displayActiveTodoItems } = useContext(TodoListContext)
    
    return(
        <div className={`${styles.todoListFooter}`}>
            <span>Items left: {displayActiveTodoItems().length}</span>
            <TodoListCategories classname={styles.todoListCategories}/>
            <ClearCompletedItems classname={styles.clearCompleted} />
        </div>
    )
}
export default TodoListFooter;
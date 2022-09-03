import { useContext, useState } from "react";
import { TodoListContext } from "../../contexts/todoList.context";
import styles from "./TodoUpdateItemModal.styles.module.css"

const TodoUpdateItemModal = ({ todoItem, setTodoItemUpdating }) => {
    const { updateTodoItem } = useContext(TodoListContext)
    const [ updatedTodoItemValue, setUpdatedTodoItemValue] = useState(todoItem.value)
     
    const updateItemHandler = (e) => {
        e.preventDefault();
        setTodoItemUpdating(prevState => !prevState)
        updateTodoItem(updatedTodoItemValue, todoItem)
    }

    const todoItemChangeHandler= (e) => {
        setUpdatedTodoItemValue(e.target.value)
    }

    return(
        <>
        <div className={styles.darkBG} onClick={
            () => setTodoItemUpdating(prevState => !prevState)} /> 
        <div className={styles.centered}>
            <form className={styles.modal} onSubmit={updateItemHandler}>
                <label htmlFor="updateTodoItem">
                    <input id="updateTodoItem"
                     type="text"
                     value={updatedTodoItemValue}
                     onChange={todoItemChangeHandler} />
                </label>
                <button type="submit">update</button>
            </form>
        </div>
        </>
    )
}

export default TodoUpdateItemModal;

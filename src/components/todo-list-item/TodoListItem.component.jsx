import { useContext, useState } from "react"

import { TodoListContext } from "../../contexts/todoList.context"
import DeleteTodo from "../delete-todo/DeleteTodo.component"
import EditTodo from "../edit-todo/EditTodo.component"
import TodoUpdateItemModal from "../todo-update-item-modal/TodoUpdateItemModal.component"

import styles from "./TodoListItem.styles.module.css"

const TodoListItem = ({ todoItem, index }) => {
    const { reOrderList, toggleCheckTodoItem } = useContext(TodoListContext)
    const [ todoItemUpdating, setTodoItemUpdating ] = useState(false)

    const dragStartEventHandler = (e) => {
        const sourceIndex = e.target.dataset.index
        console.log("drag start")
        e.dataTransfer.setData('text/plain',sourceIndex)
    }
    const dropEventHandler = (e) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain')
        const targetIndex = e.target.dataset.index
        console.log(e)
        console.log("targetindex:", targetIndex,"sourceindex:",sourceIndex)
        if(targetIndex && targetIndex !== sourceIndex){
            console.log("target index",targetIndex)
            reOrderList(Number(sourceIndex), Number(targetIndex))
        }
    }

    const dragOverEventHandler = (e) => {
        e.preventDefault();
    }

    const onCheckBoxChangeHandler = (e) => {
        toggleCheckTodoItem(todoItem)
    }
    
    return(
        <div onDrop={dropEventHandler} 
             onDragOver={dragOverEventHandler} 
             className={`${styles.todoItemContainer}`}
             data-index={index}> 
           
            <div
              draggable={true}
              onDragStart={dragStartEventHandler}
              data-index={index}>
              
                <label 
                htmlFor={`todo-check-box-${index}`}
                className={`${styles.todoText} ${styles.todoCheckbox}`}
                data-index={index}> 
                    <input type="checkbox" id={`todo-check-box-${index}`} checked={todoItem.isDone} data-item-id={todoItem.id} onChange={onCheckBoxChangeHandler} />
                   <span className={`${styles.checkboxInputLabel}`}
                    data-index={index}>
                        {todoItem.value}
                    </span>
                </label>
            </div>
                
                <DeleteTodo
                    todoItem={todoItem} 
                />
                <EditTodo
                    todoItem={todoItem}
                    setTodoItemUpdating={setTodoItemUpdating}
                />
                {
                    todoItemUpdating &&
                    <TodoUpdateItemModal 
                        todoItem={todoItem}
                        setTodoItemUpdating={setTodoItemUpdating}
                    />
                }
        </div>
    )
}

export default TodoListItem;
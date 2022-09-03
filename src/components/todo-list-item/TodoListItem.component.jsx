import { useContext, useState } from "react"

import { TodoListContext } from "../../contexts/todoList.context"
import DeleteTodo from "../delete-todo/DeleteTodo.component"
import { ReactComponent as CheckBox } from "../../images/icon-check.svg"
import EditTodo from "../edit-todo/EditTodo.component"
import TodoUpdateItemModal from "../todo-update-item-modal/TodoUpdateItemModal.component"

const TodoListItem = ({ todoItem, index }) => {
    const { reOrderList, toggleCheckTodoItem } = useContext(TodoListContext)
    const [checked, setChecked] = useState(todoItem.isDone)
    const [ todoItemUpdating, setTodoItemUpdating ] = useState(false)

    const dragStartEventHandler = (e) => {
        const sourceIndex = e.target.dataset.index
        e.dataTransfer.setData('text/plain',sourceIndex)
    }
    const dropEventHandler = (e) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain')
        const targetIndex = e.target.dataset.index
        if(targetIndex){
            reOrderList(Number(sourceIndex), Number(targetIndex))
        }
    }

    const dragOverEventHandler = (e) => {
        e.preventDefault();
    }

    const onCheckBoxChangeHandler = (e) => {
        setChecked(!checked)
        toggleCheckTodoItem(todoItem)
    }
    
    return(
        <div onDrop={dropEventHandler} onDragOver={dragOverEventHandler} className="todo-item-container"> 
           
                <label htmlFor="check-box">
                    <input type="checkbox" checked={checked} data-item-id={todoItem.id} onChange={onCheckBoxChangeHandler} />
                </label>
                <CheckBox />
                <div
                draggable={true}
                onDragStart={dragStartEventHandler} 
                data-index={index}
                className="todo-item"
                data-is-completed={todoItem.isDone}>
                    {todoItem.value}
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
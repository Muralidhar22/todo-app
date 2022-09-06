import { useContext } from "react"

import TodoListItem from "../../components/todo-list-item/TodoListItem.component"
import { TodoListContext } from "../../contexts/todoList.context"


const ActiveTodoItems = () => {
    const { todoItems, displayActiveTodoItems } = useContext(TodoListContext)
    const todoList = displayActiveTodoItems()

    return(
    <div className="todo-list">
        { todoList.map( activeItem => (
             todoItems.map((item,index) => {
                 return(
                     activeItem.id === item.id && 
                     <TodoListItem 
                         key={activeItem.id}
                         todoItem={activeItem}
                         index={index}
                     />
                 )
             })
         ))}
    </div>
    )
}

export default ActiveTodoItems; 
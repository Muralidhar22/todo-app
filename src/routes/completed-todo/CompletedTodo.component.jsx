import { useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";
import TodoListItem from "../../components/todo-list-item/TodoListItem.component";

const CompletedTodoItems = () => {
    const { todoItems, displayCompletedTodoItems } = useContext(TodoListContext)
    const todoList = displayCompletedTodoItems()
    return(
        todoList.map( activeItem => (
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
        ))
    )

}

export default CompletedTodoItems;
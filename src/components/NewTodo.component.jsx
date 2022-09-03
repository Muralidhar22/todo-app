import { useContext, useState } from "react";
import { TodoListContext } from "../contexts/todoList.context";

const NewTodo = () => {
    const { addNewTodoItem } = useContext(TodoListContext)
    const [ newTodo, setNewTodo] = useState("")

    const onNewItemSubmit = (e) => {
        e.preventDefault();
        addNewTodoItem(newTodo)
        setNewTodo("")
    }

   const onChangeEventHandler = (e) => {
    setNewTodo(e.target.value)
   }

    return(
        <form onSubmit={onNewItemSubmit}>
            <label htmlFor="check-box">
                <input type="checkbox" disabled />
            </label>
            <label htmlFor='new-todo'>
                <input id="new-todo" 
                    name="newTodoItem"
                    value={newTodo}
                    onChange={onChangeEventHandler}
                    placeholder="Create a new todo..." />
            </label>
        </form>

    )
}


export default NewTodo;

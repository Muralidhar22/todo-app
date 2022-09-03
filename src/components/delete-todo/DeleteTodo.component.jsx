import { ReactComponent as DeleteIcon } from "../../images/icon-cross.svg"
import { useContext } from "react";
import { TodoListContext } from "../../contexts/todoList.context";

const DeleteTodo = ({ todoItem }) => {
    const { deleteTodoItem } = useContext(TodoListContext)
    
    const deleteTodoEventHandler = () => {
        deleteTodoItem(todoItem)
    }
    
    return (
        <button>
           <DeleteIcon 
                    onClick={deleteTodoEventHandler}/>
        </button>
    )
}

export default DeleteTodo;
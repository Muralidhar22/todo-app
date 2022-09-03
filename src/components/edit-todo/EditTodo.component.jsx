import { ReactComponent as EditIcon } from "../../images/icon-edit.svg"

const EditTodo = ({ setTodoItemUpdating }) => {
    const editTodoEventHandler = () => {
        console.log("editing todo")
        setTodoItemUpdating(prevState => !prevState)
    }

    return(
        <button>
            <EditIcon
                onClick={editTodoEventHandler}
            />
        </button>
    )
}

export default EditTodo;
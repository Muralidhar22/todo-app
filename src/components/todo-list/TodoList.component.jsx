import { useContext } from "react";

import { TodoListContext } from "../../contexts/todoList.context";
import TodoListItem from "../todo-list-item/TodoListItem.component";

function TodoList(){
  const { todoItems } = useContext(TodoListContext)
  
        return(
            <div className="todo-list">
              {todoItems &&
               todoItems.map( (todoItem, index) => {
                return (
                 <TodoListItem 
                   key={todoItem.id}
                   todoItem={todoItem}
                   index={index}
                  />
                )
              })
              }
            </div>
        )

    }


export default TodoList;
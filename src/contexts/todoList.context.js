import { createContext, useReducer, useEffect } from "react";
import { nanoid } from 'nanoid';

const DEFAULT_TODO_ITEMS = [{
    id: nanoid(),
    value: "Complete online Javascript course",
    isDone:false,
},
{
  id: nanoid(),  
  value: "Jog around the park 3x",
  isDone:false,
},
{
  id: nanoid(),  
  value: "10 minutes meditation",
  isDone:false,
},
{
  id: nanoid(),  
  value: "Read for 1 hour",
    isDone:true,
},
{
  id: nanoid(),
  value: "Pick up groceries",
  isDone:true,
},
{
  id: nanoid(),
  value: "Go for driving class",
  isDone:false,
}]

const TODO_LIST_ACTION_TYPES = {
  SET_NEW_TODO_ITEM: "SET_NEW_TODO_ITEM",
  MODIFY_TODO_LIST: "MODIFY_TODO_LIST",
}

const INITIAL_STATE = JSON.parse(localStorage.getItem("todolist")) || DEFAULT_TODO_ITEMS;

// create context
export const TodoListContext = createContext(JSON.parse(localStorage.getItem("todolist")) || DEFAULT_TODO_ITEMS)

// reducer function
function todoListReducer(state, action){
  const { type, payload } = action

    switch(type){
      case TODO_LIST_ACTION_TYPES.SET_NEW_TODO_ITEM:
        return(
          [
            ...state,
            payload,
          ]
        )
      case TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST:
        return (
          [
          ...payload
          ]
        )
      default:
        throw new Error(`Invalid action type ${type} in todoList reducer`)
    }
  }

const reOrderListItems = (sourceIndex, targetIndex, todoList) => {
    const draggedItem = todoList[sourceIndex]
    const newTodoList = [...todoList]

    if( sourceIndex > targetIndex ) {
      // add all index values by 1 for all items upto source index
      for(let i = sourceIndex; i > targetIndex; i-- ){
          newTodoList[i] =newTodoList[i-1]
      }
      newTodoList[targetIndex] = draggedItem
      return newTodoList
  }
  if( targetIndex > sourceIndex){
      // subtract all index values by 1 for all items upto source index
     for(let i = sourceIndex; i < targetIndex; i++){
      newTodoList[i] = newTodoList[i+1]
     }
     newTodoList[targetIndex] = draggedItem
     return newTodoList
  }
}

const addNewItem = (value) => {
  return {
    id: nanoid(),
    value,
    isDone: false,
  }
}

const checkCompletedItem = (checkedItem, todoItems) => {
  return (
    todoItems.map( item => (
      item.id === checkedItem.id ?
      {
        ...item,
        isDone: !checkedItem.isDone
      } :
      item
      ))
  )
}

const deleteItem = (itemToDelete, todoItems) => {
    return (
      todoItems.filter( item => itemToDelete.id !== item.id)
    )
}

const updateItem = (newItemValue, itemToUpdate, todoItems) => {
  return (
    todoItems.map( item => (
      item.id === itemToUpdate.id ?
      {
        ...item,
        value: newItemValue,
      } :
      item
    ))
  )
}

const updateAllItemsCheckbox = (checkboxValue, todoItems) => {
  return (
    todoItems.map( item => (
      {
        ...item,
        isDone: checkboxValue
      }
    ))
  )
}

export const TodoListProvider = ({ children }) => {
    const [ todoItems, dispatch ] = useReducer(todoListReducer,INITIAL_STATE)

    useEffect(() => {
      console.log("Use effect running inside todoContext")
      localStorage.setItem("todolist",JSON.stringify(todoItems))
    },[todoItems])

    const displayActiveTodoItems = () => {
      return todoItems.filter(todoItem => !todoItem.isDone);
    }

    const displayCompletedTodoItems = () => {
      return todoItems.filter(todoItem => todoItem.isDone);
    }

    const addNewTodoItem = (value) => {
      const newTodoItem = addNewItem(value)
      dispatch({ type: TODO_LIST_ACTION_TYPES.SET_NEW_TODO_ITEM, payload: newTodoItem})
    }

    const clearCompletedTodoItems = (item) => {
      const newTodoList = todoItems.filter(todoItem => !todoItem.isDone)
      dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newTodoList })
    }

    const reOrderList = (sourceIndex, targetIndex) => {
       const newOrderedList = reOrderListItems(sourceIndex, targetIndex, todoItems)
       dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newOrderedList })
      }


    const toggleCheckTodoItem = (checkedItem) => {
      const newTodoList = checkCompletedItem(checkedItem, todoItems)
      dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newTodoList })
    }

    const deleteTodoItem = (itemToDelete) => {
      const newTodoList = deleteItem(itemToDelete, todoItems)
      dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newTodoList })
    }

    const updateTodoItem = (newItemValue, itemToUpdate) => {
      const newTodoList = updateItem(newItemValue, itemToUpdate, todoItems)
      dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newTodoList })
    }

    const toggleAllCheckBox = (checkboxValue) => {
      const newTodoList = updateAllItemsCheckbox(checkboxValue, todoItems)
      dispatch({ type: TODO_LIST_ACTION_TYPES.MODIFY_TODO_LIST, payload: newTodoList })
    }

    const value = {
        todoItems,
        displayActiveTodoItems,
        displayCompletedTodoItems,
        clearCompletedTodoItems,
        addNewTodoItem,
        reOrderList,
        toggleCheckTodoItem,
        deleteTodoItem,
        updateTodoItem,
        toggleAllCheckBox,
    }

    return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
}


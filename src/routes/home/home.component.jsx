import { Outlet } from "react-router-dom";
import ClearCompletedItems from "../../components/clear-completed-items/ClearCompletedItems.component";

import Header from "../../components/Header.component"
import NewTodo from "../../components/NewTodo.component";
import TodoListCategories from "../../components/todo-list-categories/TodoListCategories.component";

const Home = () => {
    return(
    <>
        <Header />
        <NewTodo />
        <Outlet />
        <TodoListCategories />
        <ClearCompletedItems />
        <p>Drag and drop to reorder list</p>
    </>
    )
}

export default Home;
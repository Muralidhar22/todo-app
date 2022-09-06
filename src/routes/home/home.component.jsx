import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header.component"
import NewTodo from "../../components/new-todo/NewTodo.component";
import ToggleAllCheckbox from "../../components/toggle-all-checkbox/ToggleAllCheckbox.component";
import TodoListFooter from "../../components/todo-list-footer/TodoListFooter.component";

const Home = () => {
    return(
    <>
        <Header />
        <NewTodo />
        <ToggleAllCheckbox />
        <main>
            <Outlet />
            <TodoListFooter />
        </main>
        <footer>
            <p> Drag and drop to reorder list</p>
        </footer>
    </>
    )
}

export default Home;
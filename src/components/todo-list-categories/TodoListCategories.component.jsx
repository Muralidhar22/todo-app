import { NavLink } from "react-router-dom";

const TodoListCategories = ({ classname }) => {
    const activeStyle = { color: 'hsl(220, 98%, 61%)' };
    return(
        <div className={classname}>
        <NavLink to="/">
            All
        </NavLink>
        <NavLink to="/active-todo">
            Active
        </NavLink>
        <NavLink to="/completed-todo">
            Completed
        </NavLink>
    </div>  
    )
}

export default TodoListCategories;
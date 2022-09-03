import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import CompletedTodoItems from "./routes/completed-todo/CompletedTodo.component";
import ActiveTodoItems from "./routes/active-todo/ActiveTodo.component"
import TodoList from "./components/todo-list/TodoList.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<TodoList />} />
        <Route path="active-todo" element={<ActiveTodoItems />} />
        <Route path="completed-todo" element={<CompletedTodoItems />} />
      </Route>
    </Routes>
  );
}

export default App;

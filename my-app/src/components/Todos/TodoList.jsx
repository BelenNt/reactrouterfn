import React from "react";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { todoName: "First Todo", completed: false }]);

    const addRandomTodo = () => {
        const newTodos = [...todos];
        newTodos.push({ todoName: "New Todo", completed: false })
        console.log(newTodos);
        setTodos(newTodos);
    }

    return <div>
        <div>
            {
                todos.map((todo, index) => {
                    return <Todo todoName={todo.TodoList} key={index} />
                })
            }
        </div>
        <div>
            <button onClick={addRandomTodo}>Add New Todo</button>
        </div>
    </div>
};
export default TodoList;
import React from "react";
import Todo from './ToDo';
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    console.log(filteredTodos);
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map((todo) => (
                <Todo
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id}
                    todo={todo}
                    text={todo.text}
                />
            ))}
        </div>
    )
}

export default TodoList;
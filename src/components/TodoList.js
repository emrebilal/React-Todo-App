import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,setTodos}) => {
    return (
        <ul className="todoList">
            {todos.map(todo => (
                <Todo 
                    setTodos={setTodos} 
                    todos={todos}
                    key={todo.id}
                    todo={todo} 
                    text={todo.text}
                />
            ))}
        </ul>     
    );
};

export default TodoList;
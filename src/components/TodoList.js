import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    };
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    const updateTodo = (todoID, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoID ? newValue : item)));
    }
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        });
    };

    return (
        <div className='todo-app'>
            <h2>TODO LIST</h2>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
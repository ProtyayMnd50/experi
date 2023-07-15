import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCirlceLine } from 'react-icons/ri';
import { Tiedit } from 'react-icons/ti';
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null, value: ' '
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div className='p2'>
            {todos.map((todo, index) => (
                <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
                    key={index}>

                    <div className='item-name' key={todo.id} onCLick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>

                    <div className="icons">
                        <button className='edit' onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</button>
                        <button className='delete' onClick={() => removeTodo(todo.id)}>Delete</button>
                    </div>

                </div>
            )
            )}
        </div>

    );
}

export default Todo
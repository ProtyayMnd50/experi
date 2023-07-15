import React, { useState, useEffect, useRef } from 'react'
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
        // console.log(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');

    }
    return (
        <form action="" className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text" placeholder="type a todo" value={input} className='todo-input' name='text' onChange={handleChange} ref={inputRef} />
                    <button className="edit-again" >Edit</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder="type a todo" value={input} className='todo-input' name='text' onChange={handleChange} ref={inputRef} />
                    <button className="add-tsk" >Add</button>
                </>
            )}

        </form>
    )
}

export default TodoForm
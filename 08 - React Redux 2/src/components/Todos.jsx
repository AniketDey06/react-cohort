import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import './Todo.css'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                Todos
            </div>
            {todos.map((todo) => (
                <li className='todo-item' key={todo.id}>
                    <div>{todo.text}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>
            ))}
        </>
    )
}

export default Todos

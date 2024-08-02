import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

const TodoItem = ({ todo, category }) => {
    const dispatch = useDispatch();

    return (
        <li>
      <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => dispatch(toggleTodo({ id: todo.id, category }))}
      >
        {todo.text}
      </span>
            <button onClick={() => dispatch(deleteTodo({ id: todo.id, category }))}>Delete</button>
        </li>
    );
};

export default TodoItem;

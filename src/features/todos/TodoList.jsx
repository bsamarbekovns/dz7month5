import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const TodoList = ({ category }) => {
    const todos = useSelector(state => state.todos[category]);

    return (
        <div>
            <TodoInput category={category} />
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} category={category} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

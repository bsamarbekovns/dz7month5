import React from 'react';
import TodoList from '../features/todos/TodoList';

const PersonalPage = () => {
    return (
        <div>
            <h1>Personal Todos</h1>
            <TodoList category="personal" />
        </div>
    );
};

export default PersonalPage;

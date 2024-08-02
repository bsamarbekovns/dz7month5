import React from 'react';
import TodoList from '../features/todos/TodoList';

const HomePage = () => {
    return (
        <div>
            <h1>Home Todos</h1>
            <TodoList category="home" />
        </div>
    );
};

export default HomePage;

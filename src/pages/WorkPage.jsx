import React from 'react';
import TodoList from '../features/todos/TodoList';

const WorkPage = () => {
    return (
        <div>
            <h1>Work Todos</h1>
            <TodoList category="work" />
        </div>
    );
};

export default WorkPage;

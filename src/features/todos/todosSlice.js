import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    home: [],
    work: [],
    personal: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state[action.payload.category].push(action.payload.todo);
        },
        toggleTodo: (state, action) => {
            const todo = state[action.payload.category].find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state[action.payload.category] = state[action.payload.category].filter(todo => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [
        {
            id: 1,
            text: "hello World"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, acttion) => {},
        removeTodo: () => {},
    }
})
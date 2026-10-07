//reducer
import { createSlice } from '@reduxjs/toolkit';
const intialState = {
    todo:[{id:"123",task:"code",isDone:false}],
};
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    
})
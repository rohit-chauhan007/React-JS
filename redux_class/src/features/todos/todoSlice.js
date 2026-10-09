//reducer
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:"123",task:"working",isDone:false}]
};

const todoSlice = createSlice({
    name:"todo",//name of the slice
    initialState,
    reducers : {
        //action define here jo kaam krna hai (like add delete);
        addTodo : (state,action) => {
            const newTodo  = {
                id:nanoid(),
                task:action.payload,
                isDone:false
            };
            state.todos.push(newTodo)//redux gives us power that push in array without distructring
        },
        deleteTodo : (state,action) => {
           state.todos =  state.todos.filter((todo)=> todo.id !== action.payload)
        },
        markDone : (state,action) =>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                   todo.isDone = true;
                }
            });
        },
    }
});

export const  {addTodo,deleteTodo,markDone} = todoSlice.actions;
export default todoSlice.reducer;
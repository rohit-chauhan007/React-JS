import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";


export default function AddTodoForm(){
  const [task,setTask] = useState("");
  const dispatch = useDispatch();
   const submitHandler = (evt) =>{
    evt.preventDefault();
    dispatch(addTodo(task));
   }
    return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setTask(e.target.value)} type="text" ></input>
        <button >Add</button>
      </form>
    </>
    )
  }
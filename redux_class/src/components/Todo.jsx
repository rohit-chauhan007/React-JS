import { useSelector } from "react-redux"
import AddTodoForm from "./AddTaskForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";
export default function Todo(){
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteBtn = (id) =>{
    console.log(id)
     dispatch(deleteTodo(id));
  }
   return (
    <>
    <AddTodoForm />
    <h1 style={{color:"blue"}}>Todo list </h1>
       {todos.map((todo,id) => <ul key={todo.id}>{todo.task} <button onClick={()=>deleteBtn(todo.id)}>Delete</button></ul>)}
      
    </>
   )
}
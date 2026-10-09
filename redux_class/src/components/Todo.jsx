import { useSelector } from "react-redux"
import AddTodoForm from "./AddTaskForm";
export default function Todo(){
  const todos = useSelector((state) => state.todos);
  console.log(todos);
   return (
    <>
    <AddTodoForm />
    <h1 style={{color:"blue"}}>Todo list </h1>
      {todos.map((todo,id) => <ul key={id}>{todo.task}</ul>)}
    </>
   )
}
import { useSelector } from "react-redux"

export default function Todo(){
  const todos = useSelector((state) => state.todos);
  console.log(todos);
   return (
    <>
    <h1 style={{color:"blue"}}>Todo list </h1>
    {console.log("todo")}
    {todos.map((todo)=>{
    <ul>{todo}</ul>
    })}
    
    </>
   )
}
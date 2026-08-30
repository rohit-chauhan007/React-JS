import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    const [todo,setTodo] = useState([]);
    const [newTodo,setNewtodo] = useState("");
     
    const AddTodo = () =>{
      {if(!newTodo == ""){
              //  setTodo([...todo,{items:newTodo,id:uuidv4()}]);
              setTodo((prev)=>{
                return [...prev,{items:newTodo,id:uuidv4()}]
              })
              setNewtodo("");
 
      }}
       
       
    }

    const AddNewTodo = (event) =>{
       setNewtodo(event.target.value);
    }
   
    
    
    return(
        <div className="main">
          <div className="todo-container">
            <h1>TO DO</h1>
            <div className="input-container">
                <input  type="text" value={newTodo} onKeyDown={AddNewTodo} onChange={AddNewTodo} placeholder="Enter your Task ..."></input>
                <button onClick={AddTodo}>Add</button>
            </div>
            <div className="todo-lists">
                 <ul>
                    {todo.map((todo)=>(
                      <li key={todo.id}>{todo.items}</li>
                    ))}
                 </ul>
            </div>
          </div>
        </div>
    )
}
import { useState } from "react"

export default function Todo(){
    const [todo,setTodo] = useState(["sample"]);
    const [newTodo,setNewTodo] = ("this is sample");
    
    return(
        <div className="main">
          <div className="todo-container">
            <h1>TO DO</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter your Task ..."></input>
                <button onClick={AddTodo}>Add</button>
            </div>
            <div className="todo-lists">
                 <ul>
                  {todo.map((todo)=>(
                    <li>{todo}</li>
                  ))}
                 </ul>
            </div>
          </div>
        </div>
    )
}
import { useState } from "react"

export default function Todo(){
    const [todo,setTodo] = useState(["sample"]);
    console.log(todo)
    const AddTodo = () =>{
        console.log("click")
    }
    return(
        <div className="main">
          <div className="todo-container">
            <h1>TO DO</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter your Task ..."></input>
                <button onClick={AddTodo}>Add</button>
            </div>
            <div className="todo-lists">
                
            </div>

          </div>
        </div>
    )
}
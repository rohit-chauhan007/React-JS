import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
 
  const [newTodo, setNewtodo] = useState("");
   const [todo, setTodo] = useState(()=>{
    const saveTodo = localStorage.getItem("todos");
  return saveTodo ? JSON.parse(saveTodo) : [];
   });

  const AddTodo = () => {
    {
      if (!newTodo == "") {
        //  setTodo([...todo,{items:newTodo,id:uuidv4()}]);
        setTodo((prev) => {
          const saveTodos =  [...prev, { items: newTodo.toUpperCase(), id: uuidv4() }];
        localStorage.setItem("todos",JSON.stringify(saveTodos))
        console.log(localStorage.getItem("todos"));
          return saveTodos;
        });
        setNewtodo("");
      }
    }
 
  }

  const AddNewTodo = (event) => {
    setNewtodo(event.target.value);
  
  };


  const DeleteTask = (id) =>{
  //  const updateTodo =  setTodo(todo.filter((task)=>(
  //     task.id != id
  //   )));
 console.log(id);
  const updateTodo = todo.filter((task)=>{
   return task.id != id
  }) 
    setTodo(updateTodo);
    localStorage.setItem("todos",JSON.stringify(updateTodo))
   
    
  }
  const UpdateTask = (id) => {
       let cpy = todo.filter((tasks)=>(
        tasks.id == id
       ))

       console.log(cpy);
      
  }

  return (
    <div className="main">
      <div className="todo-container">
        <h1>TO DO</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onKeyDown={AddNewTodo}
            onChange={AddNewTodo}
            placeholder="Enter your Task ..."
          ></input>
          <button onClick={AddTodo}>Add</button>
        </div>
        <div className="todo-lists">
          {todo.map((todo) => (
            <div className="task-list">
             
              <div className="task">
                <input  className="check" type="checkbox"></input>
                <li key={todo.id}>{todo.items}</li>
              </div>

              
              <div  className="iconify">
                 <div onClick={()=>{UpdateTask(todo.id)}} style={{color:"blue"}} className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0z" fill="none" />
                  <g fill="currentColor">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </g>
                </svg>
              </div>
              <div onClick={()=>{DeleteTask(todo.id)}} style={{color:"red"}} className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M0 0h1024v1024H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32m-200 0H360v-72h304z"
                  />
                </svg>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

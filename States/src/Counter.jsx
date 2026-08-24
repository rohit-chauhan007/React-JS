import { useState } from "react";
export function Counter(){
  const [count,setCount] = useState(0);
   
  function incCount(){
    setCount(count + 1)
    console.log(count);
  }
     
    

    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick = {incCount}>Click</button>
        </div>
    )
}
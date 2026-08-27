import { use, useState } from 'react'
//Array can we pass in state 
//IN rendering time array not return new value it return same array 
//to array retrun new value in rendering use spread (...)
//if new value depend on older value use set callback
//setArr((prevArr) =>{
 // return [...prevArr,"new array"]
  //})

import './App.css'

function App() {
 const [arr,setArray] = useState(["banana"])
 const [fruits,setFruit] = useState(["Apple"])
  
 const Array= () => {
  setArray((prevArr)=>{
    return [...prevArr,"apple"];
  })
  console.log(arr);
   
 }
 function NewArr(){
  return(
    <>
    <h1>Hello I am Learning Array State</h1>
    <p>{arr}</p>
    
    </>
  )
}
const Fruit = () =>{
  return  
}

  return (
    <div>
     <NewArr />
      <button onClick={Array}>Click</button>
    </div>
  )
}

export default App

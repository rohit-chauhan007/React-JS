import { use, useState } from 'react'
//Array can we pass in state 
//IN rendering time array not return new value it return same array 
//to array retrun new value in rendering use spread (...)
//if new value depend on older value use set callback

import './App.css'

function App() {
 const [arr,setArray] = useState(["banana"])
  
 const Arr = () => {
  setArray((prevArr)=>{
    return [...prevArr,"apple"];
  })
  console.log(arr);
   
 }
 function ArrVal(){
  return(
    <>
    <p>{arr}</p>
    </>
  )
}

  return (
    <div>
     <ArrVal />
      <button onClick={Arr}>Click</button>
    </div>
  )
}

export default App

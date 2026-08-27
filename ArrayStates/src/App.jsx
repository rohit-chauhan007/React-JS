import { use, useState } from 'react'

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

import { useState } from 'react'

import './App.css'

function App() {
 const [arr,setArray] = useState(["banana"])

 const CallArr = () => {
    setArray(...arr,"apple");
 }

  return (
    <>
      
    </>
  )
}

export default App

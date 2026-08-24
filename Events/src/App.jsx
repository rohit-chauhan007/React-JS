//Event - Events are use to controls changes
//onClick - button or any thinng click krne pr
//onChanege - input / ya value change hone  pr trigger 
//onMouseEnter -  Element ke andar mouse enter hone pr
//onMouseLeave - element se bahar aane pr
//onSubmit- Submit hone pr

import './App.css'

function App() {
  function Show(){
    return console.log("click")
   
  }
  return (
  <>
  <button onClick ={Show}>Click</button>
  
  </>
     
  )
}

export default App


import './App.css'
import Lottery from './Lottery1'
import Ticket from './Ticket'
import { sum } from './helper';


function App() {
  //function pass on props....
  function winningCond(ticket){
    // return sum(ticket) == 15;
 return ticket[0] === 0;
    //return ticket.every((num)=>num == ticket[0]);

  }
  return (
    <>
      <Lottery n={3} winningCond={winningCond}/>
    </>
  )
}

export default App

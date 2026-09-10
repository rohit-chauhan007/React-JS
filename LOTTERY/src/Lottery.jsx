import { useState } from "react"
import  {genTicket,sum}  from "./helper";

export default function Lottery(){
    const [rand,setRand] = useState(genTicket(3));
    const isWinning = sum(rand) === 15;
  
  
    console.log("isWinning" , isWinning);
    function buyTicket(){
     setRand(genTicket(3))
    }
    return (
      <div>
        <h1 style={{color:"white"}}>Lottery Game</h1>
        <span>{rand[0]}</span>
        <span>{rand[1]}</span>
        <span>{rand[2]}</span>
        <button onClick={buyTicket} >Buy Ticket</button>
        <h1 style={{color:"red"}}>{isWinning && "Congratulatioin you win"}</h1>
      </div>
    )
}
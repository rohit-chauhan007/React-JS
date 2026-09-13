import { useState } from "react"
import  {genTicket,sum}  from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n,winningCond}){
    const [ticket,setTicket] = useState(genTicket(n));
    const isWinning = winningCond(ticket);
  

    function buyTicket(){
     setTicket(genTicket(n))
    }
    return (
      <div>
        <h1 style={{color:"white"}}>Lottery Game</h1>
        <Ticket ticket={ticket} />
        <Button action={buyTicket} />
        <h1 style={{color:"red"}}>{isWinning && "Congratulatioin you win"}</h1>
      </div>
    )
}
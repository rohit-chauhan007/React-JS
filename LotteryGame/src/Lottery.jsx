import { useState } from "react";

export default function Lottery(){
    const [randomNum,setRandomNum] = useState(0);
    const RandomNumGenrator = () =>{
         console.log("clicked");
       const randomNumber = Math.floor(Math.random()*1000);
       setRandomNum(randomNumber);
       console.log(randomNum);

    }
    
    
    return(
        <div className="main">
         <div className="lottery-container">
               <h1 className="heading">Win15</h1>
               <div className="lottery">
                 <h1>Ticket</h1>
                 <div className="ticket-number">{randomNum}</div>
                 <button onClick={RandomNumGenrator}>Generate</button>
               </div>
            </div>  
        </div>
    )
}
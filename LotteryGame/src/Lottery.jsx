import { useState } from "react";

export default function Lottery(){
    const [randomNum,setRandomNum] = useState(0);
    const [sum,setSum] = useState(0);

    const RandomNumGenrator = () =>{
       const randomNumber = Math.floor(Math.random()*900)+100;
       setRandomNum(randomNumber);
        const splitNum = String(randomNumber).split("");
        const number = splitNum.map(Number);
        console.log(number)
        let total = 0;
        {for (let i = 0; i < number.length; i++){
           total = total + number[i];    
        }}
        setSum(total);

    }
    
    
    return(
        <div className="main">
         <div className="lottery-container">
               <h1 className="heading">Win15</h1>
               <div className="lottery">
                 <h1>Ticket</h1>
                 <div className="ticket-number">{randomNum}</div>
                 <button onClick={RandomNumGenrator}>Generate</button>
                {sum == 15 ? <h3 style={{color:"white",fontSize:"1.5rem",marginTop:"1rem"}}>Congratulation you won 🥳</h3> :null}
               </div>
            </div>  
        </div>
    )
}
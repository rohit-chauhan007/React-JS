// import { useState } from "react";
//for use object in state  const [moves,setMoves] = useState({b:1})
//to access curVal.key 
//moves.b;
//rerender obj for change use spread opertor ... and use call back if the new value depend on the older value
//for use call in updation 
/*setMoves({
...moves,b:b+1;//simple
})

0r
setMoves((preVal)={
return {...preVal,preVal:preVal.b+1}
})
*/
import { useState } from "react";

export function LodoBoard() {
  /*without object massy baar baar function create krna prega
    const [moves,setMoves] = useState(0);
   const BlueMoves = () =>{
      console.log("called Blue moves")
      setMoves(moves + 1)
   }*/

 //with object 
 const [moves,setMoves] = useState({blue:0, green:0, red:0,yellow:0})

 const updateBlue = () =>{
    
   // setMoves(moves+1);//  //react obj me change detect nhi kr paa rha 
     setMoves({//isi lie object ko copy
      ...moves,blue:moves.blue+1
     });
    }
     function updateGreen(){
        setMoves((preVal)=>{
            return {...preVal, green:preVal.green+1};
        });
     };

    const updateRed = () =>{
        setMoves((preVal)=>{
            return {...preVal,red:preVal.red+1};
        });
    };
     
    const updateYellow = () => {
        setMoves((preVal)=>{
            return {...preVal,yellow:preVal.yellow+1};
        });
    };
   
   
    
  
   
 

  return (
    <div>
      <p>Game Beggin</p>
      <div className="ludo">
        <p>Blue move = {moves.blue} </p>
        <button style={{ backgroundColor: "blue",color:"black",fontSize:"1.5rem" }} onClick={updateBlue}>Blue</button>
        <p>Green move = {moves.green}</p>
        <button style={{ backgroundColor: "green",fontSize:"1.5rem" }} onClick={updateGreen} >Green</button>
        <p>Red move = {moves.red}</p>
        <button style={{ backgroundColor: "red",fontSize:"1.5rem" }} onClick={updateRed} >Red</button>
        <p>Yellow move = {moves.yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow }>Yellow</button>
      </div>
    </div>
  );
}

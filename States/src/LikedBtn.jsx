import { useState } from "react"
export function LikedBtn(){
  const [isLiked,setLiked] = useState(true);
  let style = {color:"red"}

  let toggleLiked = () =>{
     setLiked(!isLiked)
     console.log(isLiked)

  }
    return(
        <div>
            <p onClick={toggleLiked} style={{fontSize:"2rem",margin:"3rem",}}>
                {isLiked ? (<i className="fa-regular fa-heart" ></i>):(<i className="fa-solid fa-heart" style={style}></i>)}
                </p>
        </div>
    )
}
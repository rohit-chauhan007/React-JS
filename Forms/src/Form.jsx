import { useState } from "react"

export default function Form(){
    const [fullName,setFullName] = useState("");

    const handleForm =(evt) =>{
        console.log(evt.target.value)
        setFullName(evt.target.value);
    }
    return (
        <form>
        <label htmlFor="userName">FullName</label>
        <input   onChange={handleForm} type="text" placeholder="Enter your FullName" value={fullName}/>
        <button >Submit</button>
        </form>
    )
}
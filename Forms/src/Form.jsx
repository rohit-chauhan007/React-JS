import { useState } from "react"

export default function Form(){
    const [formData,setFormData] = useState({fullName:"",userName:"",Password:""});
 
     const handleInputField = (evt) =>{
       // evt.target.name//field(1)
       // evt.target.value; value(2)
       setFormData((currData)=>{//(3) [bracekts] = computing property fieldName nhi pta hota h
          return {...currData,[evt.target.name] : evt.target.value}
       })
     }
     
     const defaultHandler = (event) =>{
        event.preventDefault();
        setFormData({fullName:"",userName:"",Password:""});
     }
    return (
        <form onSubmit={defaultHandler}>
        <label htmlFor="FullName">FullName</label>
        <input onChange={handleInputField}  id="FullName"  type="text" placeholder="Enter your FullName" value={formData.fullName} name="fullName" />
 <br/><br/>
          <label htmlFor="userName">UserName</label>
        <input  onChange={handleInputField} id="UserName"  type="text" placeholder="Enter your UserName" value={formData.userName} name="userName"/>
          <label htmlFor="Password">Password</label>
        <input  onChange={handleInputField} id="UserName"  type="password" placeholder="Enter your Password" value={formData.Password} name="Password"/>
        <button >Submit</button>
        </form>
    )
}
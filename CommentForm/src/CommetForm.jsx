import { useState } from "react"

export default function CommentForm(){
    const [formData,setFormData] = useState({
        userName:"",
        remark:"",
        rating:""
    })
    const formHandler = (evt) =>{
        setFormData((currData)=>{
            return {...currData,[evt.target.name]:evt.target.value}
        })
    };
    const defaultHandler = (evt)=>{
        evt.preventDefault();
        setFormData({
            userName:"",
            remark:"",
            rating:""
        })
        console.log(formData)
    }
  return (
    <form onSubmit={defaultHandler}>
    <div>
       
        <label htmlFor="userName">UserName</label>
        <input onChange={formHandler} id="userName" type="text" placeholder="Enter your userName" value={formData.userName} name="userName"/>
       <br/><br/> 
       <label htmlFor="remark"></label>
         <textarea onChange={formHandler} id="remark" placeholder="Comments" value={formData.remark} name="remark"></textarea>
       <br/> <label htmlFor="Rating">Rating</label>
        <input onChange={formHandler} type="number" min={1} max={5} value={formData.rating} name="rating"/>
        <br/><br/>
        <button>Comment</button>
        

    </div>
    </form>
  )
}
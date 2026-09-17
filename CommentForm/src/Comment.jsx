import { useState } from "react";
import "./Comments.css";
import CommentForm from "./CommetForm";
export default function Comment() {
  const [comment, setComment] = useState([{}]);

  let addNewComment = (comment) =>{
    setComment((currComment)=>[...currComment,comment])

  }

  return (
    <div>
      <CommentForm addNewComment={addNewComment}/>
      <h1>All comments</h1>
       {comment.map((comments,idx)=>(
    <div className="comments">
          <p>{comments.userName}</p>
          <p>{comments.remark}</p>
          <p>{comments.rating}</p>
        </div>
       ))}
        
    
    </div>
  );
}

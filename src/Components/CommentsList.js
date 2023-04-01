import React from "react";
import "./css/commentsList.css";
const CommentsList = ({ comments }) => (
  <>
    <h2 className="comment-header">Comments:</h2>
    {comments.map((comment, i) => (
      <div className="comments" key={i}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;

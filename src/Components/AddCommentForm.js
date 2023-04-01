import React, { useState } from "react";
import "./css/addCommentForm.css";
import axios from "axios";
import useUser from "./css/hooks/useUser";
import BACKENDAPI from "../../src/config.api";
const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();
  const addComment = async () => {
    try {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.post(
        `${BACKENDAPI}/api/articles/${articleName}/comments`,
        {
          postedBy: commentName,
          text: commentText,
        },
        {
          headers,
        }
      );
      const updatedArticle = response.data;

      onArticleUpdated(updatedArticle);
      setCommentName("");
      setCommentText("");
    } catch (error) {
      console.log(error.response);
      console.log(error.request);
      console.log(error.message);
    }
  };

  return (
    <div className="comment-form">
      <h3 className="comment-heading">Add a comment</h3>
      {user && (
        <p>
          Loggedin user : <span style={{ color: "blue" }}>{user.email}</span>{" "}
        </p>
      )}
      <label>
        <textarea
          className="input-search"
          rows="4"
          columns="50"
          required
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button className="comment-btn" onClick={addComment}>
        Add Comment
      </button>
    </div>
  );
};

export default AddCommentForm;

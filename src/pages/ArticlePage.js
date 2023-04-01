import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../Components/CommentsList";
import AddCommentForm from "../Components/AddCommentForm";
import axios from "axios";
import BACKENDAPI from "../../src/config.api";
import "./css/articlePage.css";
import useUser from "../Components/hooks/useUser";
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const { user, isLoading } = useUser();
  const { articleId } = useParams();
  const { canUpvote } = articleInfo;

  const loadArticleinfo = async () => {
    try {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};

      const response = await axios.get(
        `${BACKENDAPI}/api/articles/${articleId}`,
        {
          headers,
        }
      );
      const newArticleInfo = await response.data;
      setArticleInfo(newArticleInfo);
    } catch (error) {
      console.log(error.response);
      console.log(error.request);
      console.log(error.message);
    }
  };

  useEffect(() => {
    // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: [] });

    if (isLoading) {
      loadArticleinfo();
    }
  }, [isLoading, user]);

  const addUpvote = async () => {
    try {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};

      const response = await axios.put(
        `${BACKENDAPI}/api/articles/${articleId}/upvote`,
        null,
        { headers }
      );
      const updatedArticle = await response.data;

      setArticleInfo(updatedArticle);
    } catch (error) {
      console.log(error.response);
      console.log(error.request);
      console.log(error.message);
    }
  };
  const article = articles.find((article) => article.name === articleId);
  if (!article) return <NotFoundPage />;

  return (
    <div className="article-page-container">
      <h1>{article.title}</h1>
      <div className="btn-container">
        {user ? (
          <button className="btn-upvote" onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Already Upvoted"}
          </button>
        ) : (
          <Link to="/login">
            <button className="btn-upvote">Login to upvote</button>
          </Link>
        )}

        <p> This article has {articleInfo.upvotes} upvote(s) </p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i} className="article-content">
          {paragraph}
        </p>
      ))}

      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <Link to="/login">
          <button className="btn-upvote">Login to add a comment</button>
        </Link>
      )}

      <CommentsList comments={articleInfo.comments} />

      {/* <p>{article.content}</p> */}
    </div>
  );
};

export default ArticlePage;

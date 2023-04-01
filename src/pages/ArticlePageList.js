import React from "react";
import ArticlesList from "../Components/ArticlesList";
import "./css/articleListPage.css";
import articles from "./article-content";
const ArticlePageList = () => {
  return (
    <div className="article-list-container">
      <h1>Articles</h1>
      <ArticlesList articles={articles} className="article-list" />
    </div>
  );
};

export default ArticlePageList;

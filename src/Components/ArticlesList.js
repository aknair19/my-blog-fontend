import { Link } from "react-router-dom";
import "./css/articleList.css";
const ArticlesList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Link key={article.name} to={`/articles/${article.name}`}>
          <h3 className="heading font-style">
            {article.title.toLocaleUpperCase()}
          </h3>
          <p className="font-style">
            {article.content[0].substring(0, 250)}...
          </p>
          <hr />
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";
import ArticlePageList from "./pages/ArticlePageList";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section id="section">
          <div className="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlePageList />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}
export default App;

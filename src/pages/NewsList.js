
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticleButton from "../components/AddArticleButton";

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [expandedArticle, setExpandedArticle] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/news") // Replace with your backend URL
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const toggleExpand = (index) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Title and Add Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-black">News Articles</h1>
        <AddArticleButton />
      </div>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article._id}
            article={article}
            isExpanded={expandedArticle === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsList;

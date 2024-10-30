import React from "react";

function ArticleCard({ article, isExpanded, onToggle }) {
  return (
    <div className="bg-white text-black shadow rounded-lg p-6 border border-gray-300 transition-transform duration-200 hover:shadow-md">
      <div onClick={onToggle} className="cursor-pointer flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{article.title}</h2>
          <p className="text-gray-600">{article.author} • {new Date(article.timestamp).toLocaleDateString()}</p>
        </div>
        {/* Expand/Collapse Icon */}
        <span className="text-2xl font-bold">{isExpanded ? "−" : "+"}</span>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-800">
          <p>{article.content}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;

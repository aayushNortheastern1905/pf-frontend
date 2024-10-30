
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/news", { title, content, author })
      .then(() => navigate("/"))
      .catch(error => console.error("Error creating article:", error));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Back Button and Centered Title */}
      <div className="flex items-center mb-8">
        {/* Back Button on the Left */}
        <button 
          onClick={() => navigate("/")} 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition mr-auto">
          ← Back to News List
        </button>

        {/* Centered Page Title */}
        <h1 className="text-4xl font-bold text-black flex-1 text-center">Create New Article</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg border border-gray-300">
        <div>
          <label className="block text-gray-800 text-lg mb-2">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>
        
        <div>
          <label className="block text-gray-800 text-lg mb-2">Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>
        
        <div>
          <label className="block text-gray-800 text-lg mb-2">Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            rows="8"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full transition">
          Create Article
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;


import React from "react";
import { Link } from "react-router-dom";

function AddArticleButton() {
  return (
    <Link to="/create" className="flex justify-center">
      <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 mb-6 transition">
        + Add New Article
      </button>
    </Link>
  );
}

export default AddArticleButton;

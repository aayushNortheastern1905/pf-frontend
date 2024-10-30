import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./pages/NewsList";
import CreateArticle from "./pages/CreateArticle";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/create" element={<CreateArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

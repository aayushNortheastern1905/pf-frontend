// src/components/ArticleCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import '@testing-library/jest-dom';

describe('ArticleCard Component', () => {
  const article = {
    title: "Sample Article",
    author: "Author Name",
    timestamp: new Date(),
    content: "Sample content"
  };

  it('renders article title, author, and date', () => {
    render(<ArticleCard article={article} isExpanded={false} onToggle={() => {}} />);
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.author)).toBeInTheDocument();
    expect(screen.getByText(new Date(article.timestamp).toLocaleDateString())).toBeInTheDocument();
  });

  it('displays content when expanded and toggles with icon', () => {
    const onToggle = jest.fn();
    render(<ArticleCard article={article} isExpanded={true} onToggle={onToggle} />);
    expect(screen.getByText(article.content)).toBeInTheDocument();

    // Verify toggle functionality
    const expandIcon = screen.getByText('-');
    fireEvent.click(expandIcon);
    expect(onToggle).toHaveBeenCalled();
  });
});

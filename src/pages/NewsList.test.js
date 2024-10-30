// src/pages/NewsList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewsList from './NewsList';
import '@testing-library/jest-dom';

describe('NewsList Component', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <NewsList />
      </BrowserRouter>
    );

  it('renders the News Articles title', () => {
    renderComponent();
    expect(screen.getByText('News Articles')).toBeInTheDocument();
  });

  it('renders the Add New Article button and navigates to create page on click', () => {
    renderComponent();
    const addButton = screen.getByRole('button', { name: /\+ Add New Article/i });
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(window.location.pathname).toBe('/create');
  });

  it('renders list of articles and toggles expand/collapse on click', () => {
    renderComponent();

    // Mock article data
    const article = {
      title: "Sample Article",
      author: "Author",
      timestamp: new Date(),
      content: "Sample content"
    };

    // Simulate fetching articles
    renderComponent();
    screen.getByText(article.title);
    screen.getByText(article.author);

    // Toggle expansion
    const card = screen.getByText(article.title);
    fireEvent.click(card);
    expect(screen.getByText(article.content)).toBeInTheDocument();
  });
});

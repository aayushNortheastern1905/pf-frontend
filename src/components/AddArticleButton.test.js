// src/components/AddArticleButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddArticleButton from './AddArticleButton';
import '@testing-library/jest-dom';

describe('AddArticleButton Component', () => {
  it('renders the Add New Article button', () => {
    render(
      <BrowserRouter>
        <AddArticleButton />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /\+ Add New Article/i })).toBeInTheDocument();
  });

  it('navigates to create article page on click', () => {
    render(
      <BrowserRouter>
        <AddArticleButton />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /\+ Add New Article/i }));
    expect(window.location.pathname).toBe('/create');
  });
});

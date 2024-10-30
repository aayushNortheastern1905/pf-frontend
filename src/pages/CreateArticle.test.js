// src/pages/CreateArticle.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import CreateArticle from './CreateArticle';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('CreateArticle Component', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <CreateArticle />
      </BrowserRouter>
    );

  it('renders the Create New Article title and form fields', () => {
    renderComponent();
    expect(screen.getByText('Create New Article')).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Content/i)).toBeInTheDocument();
  });

  it('navigates back when Back to News List button is clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /← Back to News List/i }));
    expect(window.location.pathname).toBe('/');
  });

  it('submits the form with valid data', async () => {
    axios.post.mockResolvedValueOnce({ data: { message: 'Article created' } });
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/Author/i), { target: { value: 'Test Author' } });
    fireEvent.change(screen.getByLabelText(/Content/i), { target: { value: 'Test Content' } });
    fireEvent.click(screen.getByRole('button', { name: /Create Article/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/news', {
        title: 'Test Title',
        author: 'Test Author',
        content: 'Test Content'
      });
    });
  });

  it('does not submit the form if required fields are empty', async () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /Create Article/i }));
    expect(axios.post).not.toHaveBeenCalled();
  });
});

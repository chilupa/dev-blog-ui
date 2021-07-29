import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText(/Dev Blog/)).toBeInTheDocument();
  });

  it('should render loader', () => {
    render(<App />);
    expect(screen.getByText(/Dev Blog/)).toBeInTheDocument();
  });
});

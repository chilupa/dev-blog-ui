import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render Header component', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Dev Blog/i)).toBeInTheDocument();
  });
});

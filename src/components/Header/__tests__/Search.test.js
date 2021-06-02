import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';

describe('Search', () => {
  it('should have `Dev Blog` as site title', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});

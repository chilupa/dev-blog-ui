import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../Menu';

describe('Menu', () => {
  it('should render Menu component', () => {
    const { getByText } = render(<Menu />);
    expect(getByText('Home')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SimpleCard from '../SimpleCard';

afterEach(cleanup);

describe('SimpleCard', () => {
  it('render SimpleCard component', () => {
    const props = {
      title: 'abc',
      description: 'xyz',
    };
    const { getByText } = render(<SimpleCard {...props} />);
    expect(getByText('abc')).toBeInTheDocument();
  });
});

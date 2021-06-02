import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tags from '../Tags';

afterEach(cleanup);

describe('Tags', () => {
  it('render Tags component properly', async () => {
    const props = {
      tags: ['tech', 'gadgets', 'apple'],
    };
    const { getByText, getByTestId } = render(<Tags {...props} />);
    expect(getByText('#apple')).toBeInTheDocument();
    expect(getByTestId('tags').children.length).toBe(3);
  });
  it('should display no tags', async () => {
    const props = {
      tags: [],
    };
    const { getByTestId } = render(<Tags {...props} />);
    expect(getByTestId('tags').children.length).toBe(0);
  });
});

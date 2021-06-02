import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PostCard from '../PostCard';

afterEach(cleanup);

describe('PostCard', () => {
  it('render PostCard component properly', async () => {
    const props = {
      title: 'xyz',
      description: 'abc',
      tags: [],
      likeCount: 2,
      bookmarkCount: 1,
    };
    const { getByText } = render(<PostCard {...props} />);
    expect(getByText('xyz')).toBeInTheDocument();
  });
});

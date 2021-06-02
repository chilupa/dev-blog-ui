import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Like from '../Like';

afterEach(cleanup);

describe('Like', () => {
  it('render Like component properly', async () => {
    const props = {
      bookmarkCount: 2,
      likeCount: 1,
    };
    const { getByText } = render(<Like {...props} />);
    expect(getByText('1 Like')).toBeInTheDocument();
  });
});

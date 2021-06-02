import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Bookmark from '../Bookmark';

afterEach(cleanup);

describe('Bookmark', () => {
  it('render Bookmark component properly', async () => {
    const props = {
      bookmarkCount: 2,
      likeCount: 1,
    };
    const { getByText } = render(<Bookmark {...props} />);
    expect(getByText('2 Bookmarks')).toBeInTheDocument();
  });
});

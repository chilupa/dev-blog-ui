import { render } from '@testing-library/react';
import React from 'react';
import Promotion from '../Promotion';

describe('Promotion', () => {
  it('should render Promotion component', () => {
    const { getByTestId } = render(<Promotion />);
    expect(getByTestId('promotion')).toBeInTheDocument();
  });
});

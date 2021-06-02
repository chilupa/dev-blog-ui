import React from 'react';
import { render, screen } from '@testing-library/react';
import SiteTitle from '../SiteTitle';

describe('SiteTitle', () => {
  it('should have `Dev Blog` as site title', () => {
    render(<SiteTitle />);
    expect(screen.getByTestId('siteTitle')).toBeInTheDocument();
  });
});

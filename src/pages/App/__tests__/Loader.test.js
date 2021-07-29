import { render } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  it('should render Loader component', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });
});

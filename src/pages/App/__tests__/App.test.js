import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MockedProvider } from '@apollo/client/testing';
const mocks = []; // We'll fill this in next
const client = {};
describe('App', () => {
  it('should render App component', () => {
    render(
      <MockedProvider client={client} mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    expect(screen.getByText(/Dev Blog/)).toBeInTheDocument();
  });

  // it('should render loader', () => {
  //   render(<App />);
  //   expect(screen.getByText(/Dev Blog/)).toBeInTheDocument();
  // });
});

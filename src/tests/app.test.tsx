import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders start text', () => {
  render(<App />);
  const text = screen.getByText(/Welcome to Maybor!/i);
  expect(text).toBeInTheDocument();
});

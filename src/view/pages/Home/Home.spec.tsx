import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

it('Render successfully', () => {
  render(<Home />);
  expect(screen.getByText('')).toBeInTheDocument();
});

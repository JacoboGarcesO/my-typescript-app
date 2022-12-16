import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

it('Render successfully', () => {
  render(<Layout />);
  expect(screen.getByText('')).toBeInTheDocument();
});

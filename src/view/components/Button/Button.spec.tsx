import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('Render successfully', () => {
  render(<Button />);
  expect(screen.getByText('')).toBeInTheDocument();
});

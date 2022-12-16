import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

it('Render successfully', () => {
  render(<Text />);
  expect(screen.getByText('')).toBeInTheDocument();
});

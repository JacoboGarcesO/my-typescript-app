import React from 'react';
import { render, screen } from '@testing-library/react';
import { Signin } from './Signin';

it('Render successfully', () => {
  render(<Signin />);
  expect(screen.getByText('')).toBeInTheDocument();
});

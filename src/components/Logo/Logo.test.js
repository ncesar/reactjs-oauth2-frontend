import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './index';

describe('Logo component', () => {
  it('should render normal Logo', () => {
    const { getByTestId } = render(<Logo data-testid="logo" />);
    const el = getByTestId('logo');
    expect(el).toHaveStyle('width: 18.438rem');
    expect(el).toHaveStyle('height: 4.5rem');
  });
  it('should render Logo with color white', () => {
    const { getByTestId } = render(<Logo data-testid="logo" white />);
    const el = getByTestId('logo');
    expect(el).toHaveStyle('width: 14.64rem');
    expect(el).toHaveStyle('height: 3.563rem');
  });
});

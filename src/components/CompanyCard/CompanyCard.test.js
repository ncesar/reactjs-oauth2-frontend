import React from 'react';
import { render } from '@testing-library/react';
import { CompanyCard } from './index';

describe('CompanyCard component', () => {
  it('should render CompanyCard with props', () => {
    const { getByTestId } = render(
      <CompanyCard
        data-testid="card"
        initial="Mock"
        name="Mocked name"
        category="Mocked category"
        country="Mocked country"
        photo="Mocked image"
      />,
    );
    const el = getByTestId('card');
    expect(el).toHaveTextContent('Mock');
    expect(el).not.toBeNull();
  });
});

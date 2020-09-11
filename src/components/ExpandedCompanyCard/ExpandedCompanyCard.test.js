import React from 'react';
import { render } from '@testing-library/react';
import { ExpandedCompanyCard } from './index';

describe('ExpandedCompanyCard component', () => {
  it('should render ExpandedCompanyCard with props', () => {
    const { getByTestId } = render(
      <ExpandedCompanyCard
        data-testid="card"
        initial="Mock"
        city="Mocked name"
        description="Mocked description"
        country="Mocked country"
        photo="Mocked image"
        sharePrice="3000"
        category="Mocked category"
      />,
    );
    const el = getByTestId('card');
    expect(el).toHaveTextContent('Mock');
    expect(el).not.toBeNull();
  });
});

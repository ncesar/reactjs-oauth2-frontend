import React from 'react';
import { render } from '@testing-library/react';
import { TopBarSearch } from './index';

describe('TopBarSearch component', () => {
  it('should render TopBarSearch with company name and on click func', () => {
    const { container } = render(<TopBarSearch companyName="Testing" />);
    expect(container).toHaveTextContent('Testing');
  });
});

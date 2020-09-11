import React from 'react';
import { render } from '@testing-library/react';
import { TopBar } from './index';

describe('TopBar component', () => {
  it('should render TopBar with logo and search icon', () => {
    const { container } = render(<TopBar />);
    expect(container.querySelector('.search-icon')).not.toBe(null);
  });
  // it('should render TopBar SearchBar component on search icon click', () => {
  //   const { container } = render(<TopBar />);
  //   const searchIcon = container.querySelector('.search-icon');
  //   fireEvent.click(searchIcon);
  //   expect(container.querySelector('.secondary-search-icon')).not.toBe(null);
  // });
});

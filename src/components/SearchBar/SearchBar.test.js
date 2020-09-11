import React from 'react';
import { render } from '@testing-library/react';
import CloseIcon from '@material-ui/icons/Close';
import { SearchBar } from './index';

// const myMock = jest.fn();

describe('SearchBar component', () => {
  it('should render SearchBar with Icon', () => {
    const { container } = render(<SearchBar icon={<CloseIcon />} />);
    expect(container.querySelector('svg')).not.toBe(null);
  });
  // it('should render SearchBar with setHook function', () => {
  //   const { container } = render(
  //     <SearchBar setHook={myMock} onCloseClick={myMock} />,
  //   );
  //   const iconButton = container.querySelector('.icon-button');
  //   fireEvent.click(iconButton);
  //   expect(myMock).toHaveBeenCalled();
  // });
});

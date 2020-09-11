import React, { useState, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { StyledTopBarWrapper, StyledLogoWrapper } from './styled';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { HomepageContext } from '../../layout/Homepage/HomepageContext';

export const TopBar = (props) => {
  const { onSearchClick, ...other } = props;
  const [expanded, setExpanded] = useState(false);
  const { setSearchClicked, searchedValue, setSearchedValue } = useContext(
    HomepageContext,
  );
  const searchIconHandler = () => {
    setSearchClicked(true);
    setExpanded(true);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledTopBarWrapper {...other}>
      {!expanded ? (
        <React.Fragment>
          <StyledLogoWrapper>
            <Logo white />
          </StyledLogoWrapper>
          <SearchIcon onClick={searchIconHandler} className="search-icon" />
        </React.Fragment>
      ) : (
        <SearchBar
          icon={<SearchIcon className="secondary-search-icon" />}
          hook={expanded}
          setHook={setExpanded}
          placeholder="Pesquisar(ex: Nome da empresa ou categoria)"
          fullWidth
          onCloseClick={() => setSearchClicked(false)}
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
          formProps={{ onSubmit: onSubmitHandler }}
        />
      )}
    </StyledTopBarWrapper>
  );
};

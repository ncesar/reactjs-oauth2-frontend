import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { StyledTopBarWrapper, StyledTitle } from './styled';

export const TopBarSearch = (props) => {
  const { companyName, onArrowClick, ...other } = props;
  return (
    <StyledTopBarWrapper {...other}>
      <ArrowBackIcon onClick={onArrowClick} />
      <StyledTitle
        color="#fff"
        margin="0 0 0 3rem"
        size="1.5rem"
        weight="normal"
      >
        {companyName}
      </StyledTitle>
    </StyledTopBarWrapper>
  );
};

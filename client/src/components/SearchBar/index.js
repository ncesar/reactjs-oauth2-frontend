import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { StyledFieldWrapper, StyledForm } from './styled';

export const SearchBar = (props) => {
  const {
    title,
    icon,
    setHook,
    hook,
    onCloseClick,
    formProps,
    ...other
  } = props;
  const iconButtonHandler = () => {
    setHook(!hook);
    onCloseClick();
  };
  return (
    <StyledForm {...formProps}>
      <StyledFieldWrapper>
        {icon && icon}
        <TextField
          type="text"
          autoFocus
          {...other}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle searchbar"
                  onClick={iconButtonHandler}
                  onMouseDown={iconButtonHandler}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </StyledFieldWrapper>
    </StyledForm>
  );
};

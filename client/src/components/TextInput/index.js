import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { StyledTypography, StyledFieldWrapper } from './styled';

export const TextInput = (props) => {
  const { title, icon, error, isPassword = false, ...other } = props;
  const [showPassword, setShowPassword] = useState(true);
  return (
    <React.Fragment>
      {title && <StyledTypography>{title}</StyledTypography>}
      <StyledFieldWrapper>
        {icon && icon}
        {!isPassword ? (
          <TextField error={error} className="filter" {...other} />
        ) : (
          <TextField
            type={!showPassword ? 'text' : 'password'}
            error={error}
            {...other}
            InputProps={
              !error && {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            }
          />
        )}
        {error && <ErrorIcon className="error-icon" />}
      </StyledFieldWrapper>
    </React.Fragment>
  );
};

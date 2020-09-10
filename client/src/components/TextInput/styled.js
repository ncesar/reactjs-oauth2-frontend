import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledTypography = styled(Typography)`
  && {
    margin-top: 20px;
  }
`;
export const StyledFieldWrapper = styled.div`
  position: relative;
  input {
    padding-left: 40px;
    font-size: 1.36rem;
    color: #403e4d;
  }
  .error-icon {
    fill: #ff0f44;
    position: absolute;
    right: 3px;
    top: 22px;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

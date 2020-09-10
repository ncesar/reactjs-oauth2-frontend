import styled, { css } from 'styled-components';

export const StyledTitle = styled.h2`
  text-align: center;
  color: #383743;
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}
  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

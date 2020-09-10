import styled, { css } from 'styled-components';

export const StyledHomepageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 77.5vh;
  ${(props) =>
    props.adjustHeight &&
    css`
      height: 100%;
      margin-top: 2.75rem;
    `}
`;

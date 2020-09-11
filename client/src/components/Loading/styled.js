import styled from 'styled-components';

export const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -64px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background: var(--color-bg-transparent);
  svg {
    position: absolute;
    width: 40%;
    height: 40%;
    path {
      fill: var(--color-bg-loading);
    }
  }
`;

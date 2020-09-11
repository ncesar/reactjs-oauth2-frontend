import styled from 'styled-components';
import { Title } from '../Title';

export const StyledTopBarWrapper = styled.header`
  width: 100%;
  height: 9.625rem;
  background: var(--color-topbar-gradient);
  padding: 5rem 3.438rem 2.125rem 3.438rem;
  display: flex;
  align-items: center;
  svg {
    width: 2.188rem;
    height: 2.188rem;
    fill: var(--color-bg);
    cursor: pointer;
  }
  @media (max-width: 576px) {
    padding: 3rem 2rem 1rem 2rem;
  }
`;
export const StyledTitle = styled(Title)`
  text-transform: uppercase;
  @media (max-width: 576px) {
    font-size: 16px;
    margin-left: 15px;
  }
`;

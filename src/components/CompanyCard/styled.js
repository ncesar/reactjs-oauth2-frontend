import styled, { css } from 'styled-components';
import { Title } from '../Title';

export const StyledCompanyWrapper = styled.article`
  width: 80%;
  height: 13.366rem;
  border-radius: 4.7px;
  background: var(--color-bg);
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
`;
export const StyledCompanyInitial = styled.div`
  background: #7dc075;
  margin: 1.688rem 2.461rem 1.194rem 1.194rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  ${(props) =>
    props.bgImage &&
    css`
      background-image: url(https://empresas.ioasys.com.br/${props.bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}
`;
export const StyledInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
  width: 100%;
  align-items: baseline;
`;
export const StyledTitle = styled(Title)`
  text-transform: uppercase;
  text-shadow: 2px 2px var(--color-black);
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
export const StyledInformationTitle = styled(Title)`
  @media (max-width: 576px) {
    font-size: 19px;
  }
`;

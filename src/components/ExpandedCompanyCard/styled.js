import styled, { css } from 'styled-components';

export const StyledCompanyWrapper = styled.article`
  width: 80%;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  padding: 3rem 4.688rem;
  border-radius: 4.8px;
  margin-top: 2.75rem;
  @media (max-width: 576px) {
    padding: 1rem 2rem;
  }
`;
export const StyledCompanyInitial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-company);
  width: 100%;
  ${(props) =>
    props.bgImage &&
    css`
      background-image: url(https://empresas.ioasys.com.br/${props.bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}
`;
export const StyledCompanyDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

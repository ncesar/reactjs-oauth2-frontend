import styled from 'styled-components';

export const StyledTopBarWrapper = styled.header`
  width: 100%;
  height: 22.5vh;
  background: linear-gradient(180deg, #ee4c77 34%, #0d0430 200%);
  display: flex;
  align-items: center;
  justify-content: center;
  .search-icon {
    margin-right: 2.5rem;
    width: 2.75rem;
    height: 2.75rem;
    color: #fff;
    cursor: pointer;
  }
  .secondary-search-icon {
    position: absolute;
    top: -5px;
    left: 25px;
    width: 2.75rem;
    height: 2.75rem;
    color: #fff;
    cursor: pointer;
    z-index: 1;
  }
`;
export const StyledLogoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  transform: translateX(10px);
`;

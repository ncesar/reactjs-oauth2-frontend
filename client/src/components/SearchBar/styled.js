import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
`;
export const StyledFieldWrapper = styled.div`
  position: relative;
  width: inherit;
  padding: 0 20px;

  .MuiInput-underline:after {
    border-bottom: 1px solid #fff;
  }
  input {
    padding-left: 60px;
    font-size: 2.125rem;
    color: #fff;
    ::-webkit-input-placeholder {
      /* Edge */
      color: #991237;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #991237;
    }

    ::placeholder {
      color: #991237;
    }
  }
  svg {
    fill: #fff;
  }
`;

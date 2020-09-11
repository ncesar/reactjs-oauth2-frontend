import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
`;
export const StyledFieldWrapper = styled.div`
  position: relative;
  width: inherit;
  padding: 0 20px;

  .MuiInput-underline:after {
    border-bottom: 1px solid var(--color-bg);
  }
  input {
    padding-left: 60px;
    font-size: 1.5rem;
    color: var(--color-bg);
    ::-webkit-input-placeholder {
      /* Edge */
      color: var(--color-placeholder);
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: var(--color-placeholder);
    }
    ::placeholder {
      color: var(--color-placeholder);
    }
  }
  svg {
    fill: var(--color-bg);
  }
`;

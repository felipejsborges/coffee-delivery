import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 0.75rem;
  height: 2.625rem;
  width: 100%;
  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 0.25rem;

  &::placeholder {
    font-size: 0.875rem;
    color: 1px solid ${(props) => props.theme.baseLabel};
  }

  &:focus {
    border-color: ${(props) => props.theme.yellowDark};
  }
`

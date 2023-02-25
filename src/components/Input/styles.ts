import styled from 'styled-components'

export const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 0.25rem;

  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseText};
  width: 100%;

  &::placeholder {
    /* font-size: 0.875rem; */
    color: 1px solid ${(props) => props.theme.baseLabel};
  }

  &:focus {
    border-color: ${(props) => props.theme.yellowDark};
  }
`

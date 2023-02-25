import styled from 'styled-components'

interface InputNumberContainerProps {
  height?: string
}

export const InputNumberContainer = styled.div<InputNumberContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.baseButton};
  border-radius: 0.375rem;
  height: ${(props) => props.height || '2rem'};
  width: 4.5rem;

  input {
    text-align: center;
    background: ${(props) => props.theme.baseButton};
    border: none;
    color: ${(props) => props.theme.baseTitle};
    width: 1.25rem;
    line-height: 100%;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`
export const InputValueChanger = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`

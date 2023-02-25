import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 0.375rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.baseCard};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

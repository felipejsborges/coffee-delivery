import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
  min-width: 6rem;
  min-height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.baseButton};
  border-radius: 0.375rem;

  &:hover {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.baseSubTitle};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.75rem;
    line-height: 100%;
    text-transform: uppercase;
    color: ${(props) => props.theme.baseText};
  }
`

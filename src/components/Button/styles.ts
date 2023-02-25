import styled from 'styled-components'

export const ButtonContainer = styled.button`
  min-width: 8rem;
  min-height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.yellow};
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`

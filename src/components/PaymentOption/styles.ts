import styled from 'styled-components'

interface PaymentOptionContainerProps {
  selected?: boolean
}
export const PaymentOptionContainer = styled.button<PaymentOptionContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;
  width: 12rem;
  border: 1px solid
    ${(props) => (props.selected ? props.theme.purple : props.theme.baseButton)};
  background: ${(props) =>
    props.selected ? props.theme.purpleLight : props.theme.baseButton};
  border-radius: 0.375rem;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.selected ? props.theme.purple : props.theme.baseHover};
    background: ${(props) => props.theme.baseHover};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }
`
export const Description = styled.span`
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
`
